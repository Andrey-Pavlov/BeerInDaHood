/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {AppState} from './app.service';
import {BeerService} from "./beer/services/beer.service";

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
  template: `
    <nav>
      <a [routerLink]=" ['./'] " routerLinkActive="active">
        Index
      </a>
      <a [routerLink]=" ['./home'] " routerLinkActive="active">
        Home
      </a>
      <a [routerLink]=" ['./detail'] " routerLinkActive="active">
        Detail
      </a>
      <a [routerLink]=" ['./barrel'] " routerLinkActive="active">
        Barrel
      </a>
      <a [routerLink]=" ['./about'] " routerLinkActive="active">
        About
      </a>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

{{ beersArray | json }}

    <footer>
      <span>Beer In Da Hood by <a [href]="url">URL name</a></span>
      <div>
        <a [href]="url">
          <img [src]="" width="25%">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public src = '';
  public name = '';
  public url = '';

  private beersArray: any[];

  constructor(public appState: AppState,
              private beerService: BeerService) {
  }

  public ngOnInit() {
    this.beerService.getBeers().subscribe((x: any) => {
      this.beersArray = x;
    });
  }
}
