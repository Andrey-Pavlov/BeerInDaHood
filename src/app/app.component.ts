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
import {GlobalLoadingService} from './shared/loading/global-loading.service';
import {GlobalLoadingSettings} from './shared/loading/interfaces/global-loading-settings.interface';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public src = '';
  public name = '';
  public url = '';

  public beersArray: any[];
  public loading: boolean = false;
  public loadingSettings: GlobalLoadingSettings;

  constructor(private beerService: BeerService, private globalLoadingServie: GlobalLoadingService) {
    globalLoadingServie.startLoading$.subscribe((settings: GlobalLoadingSettings) => {
      this.loading = true;
      this.loadingSettings = Object.assign({}, <GlobalLoadingSettings> { isGlobal: true }, settings);
    });

    globalLoadingServie.stopLoading$.subscribe(() => {
      this.loading = false;
    });
  }

  public ngOnInit() {
    this.globalLoadingServie.startGlobalLoading();

    this.beerService.getFeatures().subscribe((x: any) => {
      this.beersArray = x;

      // Fake load loading
      // setTimeout(() => {
        this.globalLoadingServie.stopGlobalLoading();
      // }, 3000);
});
  }
}
