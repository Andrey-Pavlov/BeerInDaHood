import {
  Component,
  OnInit
} from '@angular/core';

import { Title } from './title';
import { XLargeDirective } from './x-large';
import {BeerService} from '../beer-common/services/beer.service';

import * as _ from 'lodash';

@Component({
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public featuredBreweries: any[] = [];
  public feautredBeers: any[] = [];

  constructor(private beerService: BeerService) {

  }

  public ngOnInit() {
    this.beerService.getFeatures().subscribe((features) => {
      let featuredBeers = [];
      _(features).forEach((feature) => {
        // this.featuredBreweries.push(feature.brewery);
        featuredBeers.push(feature.beer);
      });

      this.feautredBeers = featuredBeers;
    });
  }
}
