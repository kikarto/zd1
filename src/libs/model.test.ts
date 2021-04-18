import { Model } from '../enums/model';
import { getRandomIdForModel, MAX_ID_FOR_PERSON, MAX_ID_FOR_STARSHIP } from './model';

describe('model.ts > getRandomIdForModel', () => {

  it('person', () => {
    const model = Model.Person;
    const id = getRandomIdForModel(model);
    expect(typeof id).toEqual('number');
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(MAX_ID_FOR_PERSON);
  });

  it('starship', () => {
    const model = Model.Starship;
    const id = getRandomIdForModel(model);
    expect(typeof id).toEqual('number');
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(MAX_ID_FOR_STARSHIP);
  });
});
