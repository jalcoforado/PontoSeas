import { Users } from './../../../../Models/Users';
import { ToastService } from './../../../shared/Auxiliary Services/toast.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/basic-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {
  userReset: Users = new Users();
  constructor(private toast: ToastService, private _loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  resetPassword(f) {
    this._loginService.recoverPassword(this.userReset)
      .then(x => { this.toast.swalAlert('Email Enviado', 'Email com a redefinição da senha foi enviado, por favor verifique sua nova senha!'
                                        , 'success'), this.router.navigate([''])})
      .catch(x => this.toast.toastAlert(x, 'error'));
  }

}
