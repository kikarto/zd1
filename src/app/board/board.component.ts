import { Component, OnInit } from '@angular/core';
import { Model } from 'src/enums/model';
import { environment } from 'src/environments/environment';
import { ICard } from 'src/interfaces/card';
import { IScore } from 'src/interfaces/score';
import { Board } from 'src/libs/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  score: IScore;
  model: Model;
  cards: [ICard | null, ICard | null] = [null, null];
  loading = false;
  private board: Board = new Board();
  loadingPath = `${environment.path}/assets/loading.svg`;

  constructor() {
    this.score = this.board.getScore;
    this.model = this.board.getModel;
  }

  reset(): void {
    if (confirm('Are you sure you want to clear the results?')) {
      this.board.refresh();
      this.score = this.board.getScore;
    }
  }

  async play(): Promise<void> {
    this.loading = true;
    try {
      this.cards = await this.board.play();
      this.score = this.board.getScore;
    } catch (e) {
      alert (e);
    }
    this.loading = false;
  }

  async changeModel(isPerson: boolean): Promise<void> {
    const model: Model = isPerson ? Model.Person : Model.Starship;
    this.model = model;
    this.board.setModel = model;
  }

  ngOnInit(): void {
  }

}
