import { Routes } from '@angular/router';
import { HomeComponent } from './home';

import {NoContentComponent} from './status-codes-pages/404/no-content';
import {ServerErrorComponent} from './status-codes-pages/500/server-error';
import {BeerDetailsComponent} from './beer-details/beer-details.component';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'beer/:id', component: BeerDetailsComponent },
  { path: '500',    component: ServerErrorComponent },
  { path: '**',    component: NoContentComponent },
];
