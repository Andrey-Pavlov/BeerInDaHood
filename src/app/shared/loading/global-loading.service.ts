import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { GlobalLoadingSettings } from './interfaces/global-loading-settings.interface';

@Injectable()
export class GlobalLoadingService {
  startLoading$;
  stopLoading$;

  // Observable string sources
  private startLoading = new Subject();
  private stopLoading = new Subject();

  constructor() {
    this.startLoading$ = this.startLoading.asObservable();
    this.stopLoading$ = this.stopLoading.asObservable();
  }

  startGlobalLoading(settings?: GlobalLoadingSettings) {
    this.startLoading.next(settings);
  }

  stopGlobalLoading() {
    this.stopLoading.next();
  }
}
