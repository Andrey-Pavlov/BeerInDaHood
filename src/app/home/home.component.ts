import {
  Component,
  OnInit
} from '@angular/core';

import * as _ from 'lodash';
import {BeerService} from '../beer-common/services/beer.service';
import {GlobalLoadingService} from '../shared/loading/global-loading.service';
import {Beer} from '../beer-common/page-models/beer-page-model.interface';
import {Feature} from '../beer-common/interfaces/feature.interface';

@Component({
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public featuresBeers: Beer[] = [];
  public featuredBeer: Beer;

  constructor(private beerService: BeerService, private globalLoadingService: GlobalLoadingService) {

  }

  public ngOnInit() {
    this.globalLoadingService.startGlobalLoading();

    // this.beerService.getFeatured().subscribe((featured: Feature) => {
    //   this.featuredBeer = featured.beer;
    // });

    this.beerService.getFeatures().subscribe((features: Feature[]) => {
      let featuresBeers = [];
      _(features).forEach((feature) => {
        // this.featuredBreweries.push(feature.brewery);
        featuresBeers.push(feature.beer);
      });

      this.featuredBeer = featuresBeers[0];
      this.featuresBeers = featuresBeers.slice(1);

      // Fake load loading
      // setTimeout(() => {
      this.globalLoadingService.stopGlobalLoading();
      // }, 3000);
    });
  }
}
