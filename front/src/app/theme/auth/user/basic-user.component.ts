import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSimple } from 'src/Models/UserSimple';
import { LoginService } from '../login/basic-login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-basic-user',
  templateUrl: './basic-user.component.html',
  styleUrls: ['./basic-user.component.scss']
})
export class BasicUserComponent implements OnInit {

  msgErro : string;
  userSimple = new UserSimple();

  constructor(private _loginService: LoginService, private route: ActivatedRoute,
              private router: Router, private spinner: NgxSpinnerService) { }

  onSubmit(f) {
    this.spinner.show();
    //TODO: Change with internacionalization.
    this.userSimple.language = "pt";
    
    this._loginService.newUser(this.userSimple).then(
      res => {        
        this.router.navigate(['survey-list']);
      }
      ).catch(erro => {
        this.spinner.hide(),
        this.msgErro = erro,
        console.log(erro)})
  }

  ngOnInit() {

  }

}
