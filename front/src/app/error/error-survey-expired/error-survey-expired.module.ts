import { SharedModule } from './../../shared/shared.module';
import { ErrorSurveyExpiredComponent } from './error-survey-expired.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorSurveyExpiredRoutingModule } from './error-survey-expired-routing.module';

@NgModule({
  declarations: [ErrorSurveyExpiredComponent],
  imports: [
    CommonModule,
    ErrorSurveyExpiredRoutingModule,
    SharedModule
  ]
})
export class ErrorSurveyExpiredModule { }
