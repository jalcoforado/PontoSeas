import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import {BreadcrumbRoutingModule} from './breadcrumb-routing.module';
import {SharedModule} from '../../../../shared/shared.module';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbRoutingModule,
    Ng2GoogleChartsModule,
    SharedModule
  ],
  declarations: [BreadcrumbComponent]
})
export class BreadcrumbModule { }
