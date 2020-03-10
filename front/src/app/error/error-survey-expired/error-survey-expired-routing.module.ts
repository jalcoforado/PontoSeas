import { ErrorSurveyExpiredComponent } from './error-survey-expired.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ErrorSurveyExpiredComponent,
    data: {
      title: 'Pesquisa Expirada'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorSurveyExpiredRoutingModule { }
