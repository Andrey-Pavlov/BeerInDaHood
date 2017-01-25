import {YesNo} from './enums/yesno.enum';
import {BeersOrder} from './enums/beers-order.enum';
import {Sort} from './enums/sort.enum';

export interface BeersRequest {
  p?: number;
  ids?: number[];
  name?: string;
  glasswareId?: number;
  srmId?: number;
  availableId?: number;
  styleId?: number;
  isOrganic?: string
  hasLabels?: string
  year?: string;
  since?: string;
  status?: string;
  order?: string;
  sort?: string;
  randomCount?: number;
  withBreweries?: string;
}
