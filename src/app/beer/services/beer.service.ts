import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BeerBaseService} from "./beer-base.serive";
import {BeersRequest} from "../interfaces/beers-request.interface";
import {BeersOrder} from "../interfaces/enums/beers-order.enum";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class BeerService extends BeerBaseService {
  constructor(private http: Http) {
    super();
  }

  getBeers(): Observable<any> {
    let queryString = this.createQueryString(<BeersRequest> { name: 'ale', order: BeersOrder[BeersOrder.random], randomCount: 10});
    return this.http.get('http://api.brewerydb.com/v2/' + 'beers?' + queryString).map(x => x.json());
  }
}
