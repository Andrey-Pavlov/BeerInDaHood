import {
  Component,
  OnInit
} from '@angular/core';
import {Beer} from '../beer-common/page-models/beer-page-model.interface';
import {ActivatedRoute} from '@angular/router';
import {BeerService} from '../beer-common/services/beer.service';
import {GlobalLoadingService} from '../shared/loading/global-loading.service';
import {Title} from '@angular/platform-browser';


@Component({
  styleUrls: ['./beer-details.component.scss'],
  templateUrl: './beer-details.component.html'
})
export class BeerDetailsComponent implements OnInit {
  public beer: Beer;
  public breweries: any;

  public logoReserve: string = require('../shared/assets/img/icons/yellow-beer-512.png');

  constructor(private beerService: BeerService, private route: ActivatedRoute, private globalLoadingService: GlobalLoadingService, private title: Title) {

  }

  public ngOnInit() {
    this.globalLoadingService.startGlobalLoading();

    let id = this.route.snapshot.params['id'];

    this.beerService.getBeer(id)
      .subscribe((beer: Beer) => {
      this.beer = beer;
      this.breweries = beer.breweries;

        this.title.setTitle('Beer - ' + beer.nameDisplay);

        this.globalLoadingService.stopGlobalLoading();
    });
  }

  createLocationTitle(location: any) {

  }
}
