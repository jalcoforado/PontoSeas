import { RecoverComponent } from './../recover/recover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLoginComponent } from './basic-login.component';
import {BasicLoginRoutingModule} from './basic-login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicUserComponent } from '../user/basic-user.component';
import { LoginService } from './basic-login.service';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BasicLoginRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [BasicLoginComponent, BasicUserComponent, RecoverComponent],
  exports:[BasicLoginComponent, BasicUserComponent],
  providers:[LoginService]
})
export class BasicLoginModule { }
