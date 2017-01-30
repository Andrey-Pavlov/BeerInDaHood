import {Beer} from '../page-models/beer-page-model.interface';

export interface Feature {
  beerId: string;
  brewery: any;
  beer: Beer;
  id : number,
  updateDate : string,
  week : number,
  year : number,
  breweryId : string,
  createDate : string;
}
