import { Component, Input, OnInit } from '@angular/core';
import { IScore } from 'src/interfaces/score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() score: IScore = {
    round: 0,
    player1: 0,
    player2: 0,
  };

  constructor() {}

  ngOnInit(): void {
  }

}
