import { Model } from 'src/enums/model';

export interface ICard {
  name: string;
  desc: string;
  attack: number | 'unknown';
  model: Model;
  info: Map<string, string>;
  foto: string;
  isWin?: boolean;
}
