import { IPerson } from '../interfaces/person';
import { IStarship } from '../interfaces/starship';

export const isCorrectResponse = <T extends IPerson | IStarship>(
  resp: T | undefined,
): T | undefined => {
  if (!resp) {
    return undefined;
  }

  if (typeof resp !== 'object') {
    return undefined;
  }

  if ('detail' in resp && resp.detail === 'Not found') {
    return undefined;
  }

  return resp;
};
