import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvTourComponent } from './adv-tour.component';
/*import {TourNgBootstrapModule} from 'ngx-tour-ng-bootstrap';*/
import {AdvTourRoutingModule} from './adv-tour-routing.module';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdvTourRoutingModule,
    SharedModule,
    /*TourNgBootstrapModule.forRoot()*/
  ],
  declarations: [AdvTourComponent]
})
export class AdvTourModule { }
