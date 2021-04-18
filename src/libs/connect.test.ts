import { Model } from '../enums/model';
import { Connect } from './connect';

describe('connect.ts > Connect', () => {

  const connect = new Connect();

  const modelPerson = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'http://swapi.dev/api/planets/1/',
    films: [
      'http://swapi.dev/api/films/1/',
      'http://swapi.dev/api/films/2/',
      'http://swapi.dev/api/films/3/',
      'http://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: [
      'http://swapi.dev/api/vehicles/14/',
      'http://swapi.dev/api/vehicles/30/'
    ],
    starships: [
      'http://swapi.dev/api/starships/12/',
      'http://swapi.dev/api/starships/22/'
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'http://swapi.dev/api/people/1/'
  };

  global.fetch = jest.fn(() => Promise.resolve({
    json: Promise.resolve(JSON.stringify(modelPerson))
  })) as any;

  beforeEach(async () => {
    (fetch as any).resetMocks();
  });

  it('person', async () => {
    // (fetch as any).mockResponseOnce('')
    const model = Model.Person;
    const response = await connect.load(model);
    expect(response).toEqual(modelPerson);
    expect(fetch).toHaveBeenCalledWith('http://swapi.dev/api/people/');
  });
});
