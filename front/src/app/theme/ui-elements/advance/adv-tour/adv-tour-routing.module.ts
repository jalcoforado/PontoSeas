import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdvTourComponent} from './adv-tour.component';

const routes: Routes = [
  {
    path: '',
    component: AdvTourComponent,
    data: {
      title: 'Tour',
      icon: 'icon-crown',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - tour',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvTourRoutingModule { }
