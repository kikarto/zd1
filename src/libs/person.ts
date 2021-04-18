import { Model } from '../enums/model';
import { ICard } from '../interfaces/card';
import { IPerson } from '../interfaces/person';
import { getFotoSrc, parseAttack } from './card';

export const parsePerson = (person: IPerson): ICard => {
  const {
    name = '',
    height = '',
    mass = '',
    hair_color = '',
    eye_color = '',
    birth_year = '',
    gender = '',
  } = person || {};

  return {
    name,
    desc: `${hair_color}/${height}/${gender}`,
    attack: parseAttack(mass),
    info: new Map([
      ['Name', name],
      ['Height', height],
      ['Mass', mass],
      ['Hair color', hair_color],
      ['Eye color', eye_color],
      ['Birth year', birth_year],
      ['Gender', gender],
    ]),
    model: Model.Person,
    foto: getFotoSrc(Model.Person),
  };
};
