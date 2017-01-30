import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'server-error',
  templateUrl: 'server-error.html',
  styleUrls: ['server-error.style.scss']
})
export class ServerErrorComponent {
  constructor(private location: Location) {

  }

  goBack() {
    this.location.back();
  }
}
