import { type } from 'os';

export interface IViewListUser {
  viewState: EView;
  viewImage: boolean;
}

export enum EView {
  card = 'card',
  list = 'list',
  add = "add"
}
