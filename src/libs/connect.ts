import { Model } from '../enums/model';
import { IPerson } from '../interfaces/person';
import { IStarship } from '../interfaces/starship';
import { getRandomIdForModel } from './model';
import { isCorrectResponse } from './response';

/**
 * I checked the max id for characters and spaceships.
 * During manual tests, I noticed that not all models exist in the 1 - max range.
 * So every time it doesn't find a model, it tries again, making the query up to max times.
 */

const MAX_ATTEMPT = 5;
const API_URL = 'http://swapi.dev/api/';

export class Connect {
  private loading = false;
  private attempt = 0;

  async load<T>(model: Model): Promise<T | undefined> {
    if (this.attempt > MAX_ATTEMPT) {
      this.attempt = 0;
      throw new Error('The allowed number of attempts has been exceeded.');
    }

    const id = getRandomIdForModel(model);
    this.attempt++;

    try {
      const response = await fetch(`${API_URL}${model}/${id}/`);
      const data = await response.json();
      return data;
    }
    catch (e) {
      console.warn(e);
      return undefined;
    }
  }

  async loadPerson(): Promise<IPerson> {
    let person = await this.load<IPerson>(Model.Person);
    person = isCorrectResponse(person);

    if (person) {
      this.attempt = 0;
      return person;
    }

    return this.loadPerson();
  }

  async loadStarship(): Promise<IStarship> {
    let starship = await this.load<IStarship>(Model.Starship);
    starship = isCorrectResponse(starship);

    if (starship) {
      this.attempt = 0;
      return starship;
    }

    return this.loadStarship();
  }

  get itIsLoading(): boolean {
    return this.loading;
  }
}
