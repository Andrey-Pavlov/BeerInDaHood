import {LoadingComponent} from './loading/loading.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

const PIPES = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoadingComponent,
    ...PIPES
  ],
  exports: [
    CommonModule,
    FormsModule,
    LoadingComponent,
    ...PIPES
  ]
})
export class SharedModule {
}
