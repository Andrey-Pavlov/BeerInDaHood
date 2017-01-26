import {Component, OnInit, Input} from '@angular/core';
import {Beer} from '../../beer-common/page-models/beer-page-model.interface';

@Component({
  selector: 'beer-preview',
  styleUrls: [
    './beer-preview.scss'
  ],
  templateUrl: './beer-preview.html'
})
export class BeerPreviewComponent implements OnInit {
  @Input() beer: Beer;

  public ngOnInit(): void {
  }

  constructor() {
  }
}
