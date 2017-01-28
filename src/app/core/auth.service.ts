import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalLoadingService } from '../shared/loading/global-loading.service';

@Injectable()
export class AuthService {
  public isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string = '/';

  constructor(private router: Router, private globalLoading: GlobalLoadingService) {
  }

  login(): Observable<boolean> {
    let self = this;

    let obs =  Observable.of(true).delay(1000).do((val) => {
    });

    obs.subscribe(() => {
      self.isLoggedIn = true;
    });

    return obs;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
