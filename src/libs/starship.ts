import { Model } from '../enums/model';
import { ICard } from '../interfaces/card';
import { IStarship } from '../interfaces/starship';
import { getFotoSrc, parseAttack } from './card';

export const parseStarship = (starship: IStarship): ICard => {
  const {
    name = '',
    model = '',
    manufacturer = '',
    cost_in_credits = '',
    length = '',
    max_atmosphering_speed = '',
    crew = '',
    passengers = '',
    cargo_capacity = '',
    consumables = '',
    hyperdrive_rating = '',
    MGLT = '',
    starship_class = '',
  } = starship || {};

  return {
    name,
    desc: `${model}`,
    attack: parseAttack(crew),
    info: new Map([
      ['Name', name],
      ['Model', model],
      ['Manufacturer', manufacturer],
      ['Cost in credits', cost_in_credits.toString()],
      ['Length', length.toString()],
      ['Max atmosphering speed', max_atmosphering_speed.toString()],
      ['Crew', crew.toString()],
      ['Passengers', passengers.toString()],
      ['Cargo capacity', cargo_capacity.toString()],
      ['Consumables', consumables],
      ['Hyperdrive_rating', hyperdrive_rating],
      ['MGLT', MGLT.toString()],
      ['Starship class', starship_class],
    ]),
    model: Model.Starship,
    foto: getFotoSrc(Model.Starship),
  };
};
