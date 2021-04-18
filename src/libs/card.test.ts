import { Model } from '../enums/model';
import { checkWhoWin, parseAttack, getFotoSrc } from './card';

describe('card.ts > checkWhoWin', () => {

  it('first win', () => {
    const firstCard = { attack: 6 };
    const secondCard = { attack: 1 };
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(1);
  });

  it('second win', () => {
    const firstCard = { attack: 4 };
    const secondCard = { attack: 10 };
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(2);
  });

  it('remis', () => {
    const firstCard = { attack: 4 };
    const secondCard = { attack: 4 };
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(0);
  });

  it('first miss attack', () => {
    const firstCard = {};
    const secondCard = { attack: 4 };
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(2);
  });

  it('second miss attack', () => {
    const firstCard = { attack: 4 };
    const secondCard = {};
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(1);
  });

  it('first and second miss attack', () => {
    const firstCard = {};
    const secondCard = {};
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(0);
  });

  it('first wrong type', () => {
    const firstCard = { attack: 'asd' };
    const secondCard = { attack: 5 };
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(2);
  });

  it('second wrong type', () => {
    const firstCard = { attack: 4 };
    const secondCard = { attack: 'asd' };
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(1);
  });

  it('first undefined', () => {
    const firstCard = undefined;
    const secondCard = { attack: 5 };
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(2);
  });

  it('second undefined', () => {
    const firstCard = { attack: 4 };
    const secondCard = undefined;
    const check = checkWhoWin(firstCard as any, secondCard as any);
    expect(check).toEqual(1);
  });

});

describe('card.ts > parseAttack', () => {

  it('typeof 10', () => {
    const value = '10';
    const result = parseAttack(value);
    expect(typeof result).toEqual('number');
    expect(result).toEqual(10);
  });

  it('typeof unknown', () => {
    const value = 'unknown';
    const result = parseAttack(value);
    expect(typeof result).toEqual('string');
    expect(result).toEqual('unknown');
  });

  it('number with comma', () => {
    const value = '156,325';
    const result = parseAttack(value);
    expect(result).toEqual(156325);
  });

  it('range numbers', () => {
    const value = '156-325';
    const result = parseAttack(value);
    expect(result).toEqual(325);
  });
});

describe('card.ts > getFotoSrc', () => {

  it('person', () => {
    const model = Model.Person;
    const path = getFotoSrc(model);
    expect(typeof path).toEqual('string');
    expect(path.includes('person')).toEqual(true);
    expect(path.startsWith('/assets/person-')).toEqual(true);
  });

  it('starship', () => {
    const model = Model.Starship;
    const path = getFotoSrc(model);
    expect(typeof path).toEqual('string');
    expect(path.includes('starship')).toEqual(true);
    expect(path.startsWith('/assets/starship-')).toEqual(true);
  });
});
