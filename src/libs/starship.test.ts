import { parseAttack } from './card';
import { parseStarship } from './starship';

describe('starship.ts > parseStarship', () => {

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

    const card = parseStarship(model);
    expect(card.name).toEqual(model.name);
    expect(card.desc).toEqual(model.model);
    expect(card.attack).toEqual(parseAttack(model.crew));
  });

  it('miss name and model', () => {
    const model = {
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

    const card = parseStarship(model as any);
    expect(card.name).toEqual('');
    expect(card.desc).toEqual('');
  });
});
