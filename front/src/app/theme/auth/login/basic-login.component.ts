import { Component, OnInit } from '@angular/core';
import { Login } from 'src/Models/Login';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './basic-login.service';
import { Md5 } from "md5-typescript";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  login = new Login();
  error = "";
  constructor(private _loginService: LoginService, 
    private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService) { }

  onSubmit(f) {
    this.spinner.show();
    this._loginService.login(this.login).then(
      res => {
        this.router.navigate(['survey-list'])
      }
    ).catch(erro => {
      console.log(erro);
      this.error = erro;
      this.spinner.hide();
    })
  }

  ngOnInit() {
    //document.querySelector('body').setAttribute('themebg-pattern', 'theme4');
  }

}
