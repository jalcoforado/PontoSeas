import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Users } from 'src/Models/Users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = environment.API;
  constructor(private http: HttpClient) { }

  getSurveyById(id_user: number): Promise<Users>{
    const url = `${this.url}Users/getUserById/${id_user}`;
    return this.http.get<Users>(url, httpOptions)
    .toPromise()
    .then(res => { return res })
    .catch(err => { return Promise.reject(err.error || 'Server Error') })
  }
}
