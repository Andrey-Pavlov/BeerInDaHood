import {Component, OnInit, Input} from '@angular/core';
import {Beer} from '../../beer-common/page-models/beer-page-model.interface';
import {GlobalLoadingService} from '../loading/global-loading.service';

@Component({
  selector: 'beer-preview',
  styleUrls: [
    './beer-preview.scss'
  ],
  templateUrl: './beer-preview.html'
})
export class BeerPreviewComponent implements OnInit {
  @Input() beer: Beer;
  public beerLogo: string = require('../assets/img/icons/yellow-beer-64.png');

  constructor(private loadingService: GlobalLoadingService) {
  }

  public ngOnInit(): void {
  }
}
