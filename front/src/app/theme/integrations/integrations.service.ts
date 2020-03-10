import { TokenLogs } from './../../../Models/TokenLogs';
import { Observable } from 'rxjs/Observable';
import { Tokens } from './../../../Models/Tokens';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json',
//                              'Authorization': 'Bearer ' + localStorage.getItem('jwt')})
// };

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
};

@Injectable()
export class IntegrationsService {
  url: string = environment.API;
  httpOptions: any

  constructor(private http: HttpClient) {}

  getTokensByCompany(): Promise<Tokens[]>{
    const url = `${this.url}Tokens/All`;
    return this.http.get<Tokens[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    }).toPromise();
  }

  getLogs(): Promise<TokenLogs[]>{
    const url = `${this.url}TokenLogs/getByCompany`;
    return this.http.get<TokenLogs[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    }).toPromise();
  }

  generateToken(){
    const url = `${this.url}Tokens/save`;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    }).toPromise();
  }
}
