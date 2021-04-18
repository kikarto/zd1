import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Model } from '../../enums/model';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const testData = {
    name: 'NameTest',
    desc: 'DescTest',
    attack: 55,
    foto: '/assets/person-1.webp',
    model: Model.Person,
    info: new Map([['keyA', 'valA'], ['keyB', 'valB']]),
    isWin: false,
  };

  const testData2 = {
    name: 'NameTest2',
    desc: 'DescTest2',
    attack: 66,
    foto: '/assets/starship-2.webp',
    model: Model.Starship,
    info: new Map([['keyC', 'valC'], ['keyD', 'valD'], ['keyE', 'valE']]),
    isWin: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.data = testData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check input objects', () => {
    expect(component.data).toEqual(testData);
    const data = fixture.nativeElement;
    expect(data.querySelector('.card__img').getAttribute('src')).toEqual(testData.foto);
    expect(data.querySelector('.card__attack').textContent).toEqual(testData.attack.toString());
    expect(data.querySelector('.card__name').textContent).toEqual(testData.name);
    expect(data.querySelector('.card__desc').textContent).toEqual(testData.desc);
    expect(data.querySelector('.card__win')).toBeFalsy();
    expect(data.querySelectorAll('.card__item').length).toEqual(2);
    expect(data.querySelectorAll('.card__item')[0].textContent).toEqual(
      testData.info.keys().next().value + testData.info.values().next().value
    );
  });

  it('null input objects', () => {
    component.data = null;
    expect(component.data).toEqual(null);
    const data = fixture.nativeElement;
    fixture.detectChanges();
    expect(data.querySelector('.card')).toBeFalsy();
  });

  it('update input objects', () => {
    component.data = testData2;
    expect(component.data).toEqual(testData2);
    const data = fixture.nativeElement;
    fixture.detectChanges();
    expect(data.querySelector('.card__img').getAttribute('src')).toEqual(testData2.foto);
    expect(data.querySelector('.card__attack').textContent).toEqual(testData2.attack.toString());
    expect(data.querySelector('.card__name').textContent).toEqual(testData2.name);
    expect(data.querySelector('.card__desc').textContent).toEqual(testData2.desc);
    expect(data.querySelector('.card__win')).toBeTruthy();
    expect(data.querySelectorAll('.card__item').length).toEqual(3);
  });
});
