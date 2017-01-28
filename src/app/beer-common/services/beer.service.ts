import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {BeersRequest} from "../interfaces/beers-request.interface";
import {BeersOrder} from "../interfaces/enums/beers-order.enum";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
import {Feature} from '../interfaces/feature.interface';
import {BaseConfigService} from '../../shared/services/config/base-config.service';
import {AppConfig} from '../../shared/interfaces/config/app-config.interface';
import {APP_CONFIG} from '../../app.config';

@Injectable()
export class BeerService extends BaseConfigService {
  constructor(private http: Http, @Inject(APP_CONFIG) protected config: AppConfig) {
    super(config);
  }

  getBeers(): Observable<any> {
    let queryString = this.createQueryString(<BeersRequest> { order: BeersOrder[BeersOrder.random], randomCount: 10});
    return this.http.get(this.createUrl(this.config.paths.beers.all, queryString)).map(x => x.json().data);
  }

  getFeatured(): Observable<Feature> {
    return this.http.get(this.createUrl(this.config.paths.features.featured)).map(x => x.json().data);
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get(this.createUrl(this.config.paths.features.all)).map(x => x.json().data);
  }
}
