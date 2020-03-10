import { Users } from './../../../../Models/Users';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Login } from 'src/Models/Login';
import { UserSimple } from 'src/Models/UserSimple';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class LoginService {
    url: string = environment.API;

    constructor(private http: HttpClient) { }

    login(response: Login){
        const url =  `${this.url}login/security`;
        return this.http.post(url, response, httpOptions)
      .toPromise()      
      .then(res => {         
        let token = (<any>res).accessToken;
        localStorage.setItem("jwt", token);  
        return res })
      .catch(err => { return Promise.reject(err.error || 'Server Error') })
    }

    newUser(response: UserSimple){
        const url =  `${this.url}users/adduser`;
        return this.http.post(url, response, httpOptions)
      .toPromise()      
      .then(res => { 
        let token = (<any>res).accessToken;
        localStorage.setItem("jwt", token);  
        return res })
      .catch(err => { return Promise.reject(err.error || 'Server Error') })
    }

    recoverPassword(users: Users) {
      const url =  `${this.url}Login/RecoveryPassword`;
        return this.http.post(url, users, httpOptions)
      .toPromise()
      .then(res => {
        return res;})
      .catch(err => Promise.reject(err.error || 'Server Error'));

    }
}
