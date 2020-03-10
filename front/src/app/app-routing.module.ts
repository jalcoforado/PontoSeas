import { AuthGuardService } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { BasicLoginComponent } from './theme/auth/login/basic-login.component';

const routes: Routes = [
  {
    path: '',
    component: BasicLoginComponent,
  },
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: './theme/home/home.module#HomeModule'
      },
      {
        path: 'integrations',
        loadChildren: './theme/integrations/integrations.module#IntegrationsModule'
      },
      {
        path: 'survey-create',
        loadChildren: './theme/Survey/survey-create/survey-create.module#SurveyCreateModule'
      },
      {
        path: 'survey-list',
        loadChildren: './theme/Survey/survey-list/survey-list.module#SurveyListModule'
      },
      {
        path: 'survey-edit/:id_survey',
        loadChildren: './theme/Survey/survey-edit/survey-edit.module#SurveyEditModule'
      },
      {
        path: 'user',
        loadChildren: './theme/user/user.module#UserModule'
      },
      {
        path: 'company',
        loadChildren: './theme/company/company.module#CompanyModule'
      }
    ]
  },
  {
    path: '',
    component: BasicLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
