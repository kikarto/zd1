import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponent } from './score.component';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    component.score = { round: 7, player1: 3, player2: 2 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with "Round"', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector('.score__round').textContent).toContain('Round');
  });

  it('check input objects', () => {
    expect(component.score).toEqual({ round: 7, player1: 3, player2: 2 });
  });

  it('should have a round number ', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector('.score__round-nr').textContent).toEqual('7');
  });

  it('should have a player 1 number', () => {
    const data = fixture.nativeElement;
    expect(data.querySelectorAll('.score__player')[0].textContent).toEqual('3');
  });

  it('should have a player 2 number', () => {
    const data = fixture.nativeElement;
    expect(data.querySelectorAll('.score__player')[1].textContent).toEqual('2');
  });

  it('update input objects', () => {
    component.score = { round: 11, player1: 4, player2: 5 };
    expect(component.score).toEqual({ round: 11, player1: 4, player2: 5 });
    fixture.detectChanges();
    const data = fixture.nativeElement;
    expect(data.querySelector('.score__round-nr').textContent).toEqual('11');
    expect(data.querySelectorAll('.score__player')[0].textContent).toEqual('4');
    expect(data.querySelectorAll('.score__player')[1].textContent).toEqual('5');
  });
});
