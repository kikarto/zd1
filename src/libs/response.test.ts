import { isCorrectResponse } from './response';

describe('response.ts > isCorrectResponse', () => {

  it('good', () => {
    const model = {
      name: 'Sentinel-class landing craft',
      model: 'Sentinel-class landing craft',
      manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
      cost_in_credits: '240000',
      length: '38',
      max_atmosphering_speed: '1000',
      crew: '5',
      passengers: '75',
      cargo_capacity: '180000',
      consumables: '1 month',
      hyperdrive_rating: '1.0',
      MGLT: '70',
      starship_class: 'landing craft',
      pilots: [],
      films: [
        'http://swapi.dev/api/films/1/'
      ],
      created: '2014-12-10T15:48:00.586000Z',
      edited: '2014-12-20T21:23:49.873000Z',
      url: 'http://swapi.dev/api/starships/5/'
    };

    const resp = isCorrectResponse(model);
    expect(resp).toEqual(model);
  });

  it('undefined', () => {
    const model = undefined;
    const resp = isCorrectResponse(model);
    expect(resp).toEqual(undefined);
  });

  it('not object', () => {
    const model = '';
    const resp = isCorrectResponse(model as any);
    expect(resp).toEqual(undefined);
  });

  it('not object', () => {
    const model = 5;
    const resp = isCorrectResponse(model as any);
    expect(resp).toEqual(undefined);
  });

  it('not object', () => {
    const model = null;
    const resp = isCorrectResponse(model as any);
    expect(resp).toEqual(undefined);
  });

  it('detail = Not found', () => {
    const model = { detail: 'Not found' };
    const resp = isCorrectResponse(model as any);
    expect(resp).toEqual(undefined);
  });
});
