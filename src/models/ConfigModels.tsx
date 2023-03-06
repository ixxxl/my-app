import { type } from 'os';

export interface IViewListUser {
  viewState: EView;
  viewImage: boolean;
}

export enum EView {
  card = 'card',
  list = 'list',
  add = 'add',
}

export const dX = 50;
export interface IProps {
  idno: number | undefined;
}
export interface IPoint {
  x: number;
  y: number;
}
