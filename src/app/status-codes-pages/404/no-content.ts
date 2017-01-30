import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'no-content',
  templateUrl: 'no-content.html',
  styleUrls: ['no-content.style.scss']
})
export class NoContentComponent {
  constructor(private location: Location) {
  }

  goBack() {
    this.location.back();
  }
}
