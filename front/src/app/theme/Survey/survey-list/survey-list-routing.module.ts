import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyListComponent,
    data: {
      title: 'Lista das Pesquisas',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyListRoutingModule { }
