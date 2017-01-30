import {
  Component,
  OnInit, Input
} from '@angular/core';
import {Beer} from '../../beer-common/page-models/beer-page-model.interface';


@Component({
  selector: 'featured',
  styleUrls: ['./featured.component.scss'],
  templateUrl: './featured.component.html'
})
export class FeaturedComponent implements OnInit {

  @Input() public beer: Beer;

  constructor() {

  }

  public ngOnInit() {
  }
}
