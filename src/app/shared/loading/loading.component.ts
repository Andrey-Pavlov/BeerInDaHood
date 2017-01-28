import { Component, Input } from '@angular/core';
import { GlobalLoadingSettings } from './interfaces/global-loading-settings.interface';

@Component({
  selector: 'loading',
  template: `
      <div class="loading-container"
        [ngClass]="{'loading-container--global': settings.isGlobal}"
        *ngIf="!isLoaded">
        <div class="loading-shape"></div>
      </div>
  `
})
export class LoadingComponent {
  @Input() settings: GlobalLoadingSettings;
  @Input() isLoaded: boolean;

  constructor() {
    this.settings = {
      isGlobal: false
    };
  }
}
