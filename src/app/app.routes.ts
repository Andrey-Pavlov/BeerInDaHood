import { Routes } from '@angular/router';
import { HomeComponent } from './home';

import {NoContentComponent} from './status-codes-pages/404/no-content';
import {ServerErrorComponent} from './status-codes-pages/500/server-error';
import {BeerDetailsComponent} from './beer-details/beer-details.component';
import {DefaultTitleGuard} from './core/guards/default-title.guard';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent, canActivate: [DefaultTitleGuard] },
  { path: 'beer/:id', component: BeerDetailsComponent },
  { path: '500',    component: ServerErrorComponent, canActivate: [DefaultTitleGuard] },
  { path: '404',    component: NoContentComponent, canActivate: [DefaultTitleGuard] },
  { path: '**',    component: HomeComponent, canActivate: [DefaultTitleGuard] },
];
