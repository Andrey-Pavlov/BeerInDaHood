/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {AppState} from './app.service';
import {BeerService} from "./beer-common/services/beer.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public src = '';
  public name = '';
  public url = '';

  private beersArray: any[];

  constructor(private beerService: BeerService) {
  }

  public ngOnInit() {
    // this.beerService.getBeers().subscribe((x: any) => {
    //   this.beersArray = x;
    // });

    this.beerService.getFeatures().subscribe((x: any) => {
      this.beersArray = x;
    });
  }
}
