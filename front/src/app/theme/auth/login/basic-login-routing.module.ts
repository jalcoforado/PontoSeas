import { RecoverComponent } from './../recover/recover.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicLoginComponent } from './basic-login.component';
import { BasicUserComponent } from '../user/basic-user.component';

const routes: Routes = [
  {
    path: '',
    component: BasicLoginComponent,
    data: {
      title: 'Simple Login'
    }
  },
  {
    path: 'newuser',
    component: BasicUserComponent,
    data: {
      title: 'New User'
    }
  },
  {
    path: 'recover',
    component: RecoverComponent,
    data: {
      title: 'Recover Password'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicLoginRoutingModule { }
