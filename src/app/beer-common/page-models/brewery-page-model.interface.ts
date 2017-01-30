import {BreweryLocationPageModel} from './brewery-location-page-model.interface';

export interface BreweryPageModel {
  "id": string;
  "name": string;
  "nameShortDisplay": string;
  "description": string;
  "website": string;
  "established": number;
  "isOrganic": string;
  "images": {
    "icon": string;
    "medium": string;
    "large": string;
    "squareMedium": string;
    "squareLarge": string;
  },
  // "status": "verified",
  // "statusDisplay": "Verified",
  "createDate": number;
  "updateDate": number;
  "locations": BreweryLocationPageModel[];
}
