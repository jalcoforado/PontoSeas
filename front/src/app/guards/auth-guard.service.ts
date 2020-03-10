import { Injectable } from '@angular/core';
import { CanActivate, Router} from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import swal from 'sweetalert2';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }
  
  canActivate(){
    const expirationDate = helper.getTokenExpirationDate(localStorage.getItem("jwt"));
    var token = helper.isTokenExpired(localStorage.getItem("jwt"));
 
    if (!token){
      return true;      
    }
    localStorage.setItem('jwt', '');
    this.modalAlertRedirect();
    this.router.navigate([""]);
    return false;
  }

  modalAlertRedirect() {
    swal({
      title: 'Ops,  sua sessão expirou!',
      text: 'Por favor, efetue o login novamente!',
      type: 'info',
    }), function(){
      swal.close();
    }    
  }
}
