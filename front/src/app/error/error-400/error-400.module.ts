import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error400RoutingModule } from './error-400-routing.module';
import { Error400Component } from './error-400.component';

@NgModule({
  imports: [
    CommonModule,
    Error400RoutingModule,
  ],
  declarations: [Error400Component]
})
export class Error400Module { }
