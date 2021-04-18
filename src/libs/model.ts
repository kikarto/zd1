import { Model } from '../enums/model';

export const MAX_ID_FOR_PERSON = 83;
export const MAX_ID_FOR_STARSHIP = 43;

export const getRandomIdForModel = (model: Model = Model.Person): number => {
  const max = model === Model.Person ? MAX_ID_FOR_PERSON : MAX_ID_FOR_STARSHIP;
  const lp = Math.round(Math.random() * (max - 1)) + 1;
  return lp;
};
