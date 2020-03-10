import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyEditComponent } from './survey-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyEditComponent,
    data: {
      title: 'Editar Pesquisa',
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
export class SurveyEditRoutingModule { }
