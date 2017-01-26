import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BeerBaseService} from "./beer-base.serive";
import {BeersRequest} from "../interfaces/beers-request.interface";
import {BeersOrder} from "../interfaces/enums/beers-order.enum";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Feature} from '../interfaces/feature.interface';

@Injectable()
export class BeerService extends BeerBaseService {
  constructor(private http: Http) {
    super();
  }

  getBeers(): Observable<any> {
    let queryString = this.createQueryString(<BeersRequest> { order: BeersOrder[BeersOrder.random], randomCount: 10});
    return this.http.get('http://ekaterina.northeurope.cloudapp.azure.com:4000/api/' + 'beers?' + queryString).map(x => x.json().data);
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get('http://ekaterina.northeurope.cloudapp.azure.com:4000/api/' + 'features/').map(x => x.json().data);
  }
}
