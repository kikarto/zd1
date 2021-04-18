import { Model } from '../enums/model';
import { ICard } from '../interfaces/card';
import { IPerson } from '../interfaces/person';
import { IScore } from '../interfaces/score';
import { IStarship } from '../interfaces/starship';
import { checkWhoWin } from './card';
import { Connect } from './connect';
import { parsePerson } from './person';
import { parseStarship } from './starship';

export class Board {
  private score: IScore = {
    round: 1,
    player1: 0,
    player2: 0,
  };
  private model: Model = Model.Person;
  private connect: Connect = new Connect();

  async play(): Promise<[ICard, ICard]> {
    let cards: [ICard, ICard] | undefined;

    switch (this.model) {
      case Model.Person:
        const firstPerson: IPerson = await this.connect.loadPerson();
        const secondPerson: IPerson = await this.connect.loadPerson();

        if (firstPerson && secondPerson) {
          cards = [
            parsePerson(firstPerson),
            parsePerson(secondPerson),
          ];
        }
        break;
      case Model.Starship:
        const firstStarship: IStarship = await this.connect.loadStarship();
        const secondStarship: IStarship = await this.connect.loadStarship();

        if (firstStarship && secondStarship) {
          cards = [
            parseStarship(firstStarship),
            parseStarship(secondStarship),
          ];
        }
        break;
        default:
          cards = undefined;
    }

    if (!cards) {
      throw new Error('Models have not been loaded.');
    }

    // ? checking which card win

    const check = checkWhoWin(cards[0], cards[1]);

    if (check === 1) {
      this.score.player1++;
      cards[0].isWin = true;
    } else if (check === 2)  {
      this.score.player2++;
      cards[1].isWin = true;
    }

    this.score.round++;

    return cards;
  }

  refresh(): void {
    this.score = {
      round: 1,
      player1: 0,
      player2: 0,
    };
  }

  get getScore(): IScore {
    return this.score;
  }

  get getModel(): Model {
    return this.model;
  }

  set setModel(model: Model) {
    this.model = model;
  }
}
