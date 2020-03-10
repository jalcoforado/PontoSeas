import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error503RoutingModule } from './error-503-routing.module';
import { Error503Component } from './error-503.component';

@NgModule({
  imports: [
    CommonModule,
    Error503RoutingModule
  ],
  declarations: [Error503Component]
})
export class Error503Module { }
