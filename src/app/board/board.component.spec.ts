import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Model } from 'src/enums/model';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

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
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('null cards objects', () => {
    component.cards = [null, null];
    expect(component.cards).toEqual([null, null]);
    const data = fixture.nativeElement;
    fixture.detectChanges();
    expect(data.querySelectorAll('.card').length).toEqual(0);
  });

  it('check play and loading buttons', () => {
    const data = fixture.nativeElement;
    component.loading = false;
    expect(component.loading).toEqual(false);
    fixture.detectChanges();
    expect(data.querySelector('.board__play button').getAttribute('disabled')).toEqual(null);
    component.loading = true;
    expect(component.loading).toEqual(true);
    fixture.detectChanges();
    expect(data.querySelector('.board__play button').getAttribute('disabled')).toEqual('');
  });

  it('check change model', () => {
    const data = fixture.nativeElement;
    component.model = Model.Person;
    expect(component.model).toEqual(Model.Person);
    fixture.detectChanges();

    data.querySelectorAll('.board__bar button')[1].click();
    fixture.detectChanges();
    expect(component.model).toEqual(Model.Starship);

    data.querySelectorAll('.board__bar button')[0].click();
    fixture.detectChanges();
    expect(component.model).toEqual(Model.Person);
  });
});
