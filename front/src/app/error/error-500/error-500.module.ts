import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error500RoutingModule } from './error-500-routing.module';
import { Error500Component } from './error-500.component';

@NgModule({
  imports: [
    CommonModule,
    Error500RoutingModule
  ],
  declarations: [Error500Component]
})
export class Error500Module { }
