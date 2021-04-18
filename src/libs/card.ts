import { environment } from '../environments/environment';
import { Model } from '../enums/model';
import { ICard } from '../interfaces/card';

export const checkWhoWin = (firstCard: ICard, secondCard: ICard): 0 | 1 | 2 => {
  let firstAttack = firstCard?.attack || 0;
  let secondAttack = secondCard?.attack || 0;

  if (typeof firstAttack !== 'number') {
    firstAttack = 0;
  }

  if (typeof secondAttack !== 'number') {
    secondAttack = 0;
  }

  return firstAttack > secondAttack ? 1 : firstAttack < secondAttack ? 2 : 0;
};

export const parseAttack = (value: string): number | 'unknown' => {
  if (value === 'unknown') {
    return 'unknown';
  }

  // ? some starships have a defined range number in crew
  const getRange = value.split(/-/gi);
  if (getRange.length > 1) {
    value = getRange[getRange.length - 1];
  }

  // ? some starships have a defined crew quantity in thousands with a comma
  value = value.replace(new RegExp(/,/gi), '');

  return parseInt(value, 10);
};

export const getFotoSrc = (model: Model): string => {
  return `${environment.path}/assets/${model === Model.Person ? 'person' : 'starship'}-${Math.round(Math.random() * 3) + 1}.webp`;
};
