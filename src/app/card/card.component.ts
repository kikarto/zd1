import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: ICard | null = null;
  @Input() loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
