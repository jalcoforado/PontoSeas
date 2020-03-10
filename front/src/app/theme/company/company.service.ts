import { Departament } from './../../../Models/Deparmanent';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Companies } from 'src/Models/Companie';
import { Users } from 'src/Models/Users';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CompanyService {
  url: string = environment.API;
  constructor(private http: HttpClient) { }

  getCompanyById(id_company: number): Promise<Companies> {
    const url = `${this.url}Companies/getCompanieById/${id_company}`;
    return this.http.get<Companies>(url, httpOptions)
    .toPromise()
    .then(res => res)
    .catch(err => Promise.reject(err.error || 'Server Error'));
  }

  updateCompanie(companie: Companies) {
    return this.http.post(`${this.url}${'Companies/updateCompanie'}`, companie, httpOptions)
    .toPromise()
    .then(res => res)
    .catch(err => Promise.reject(err.error || 'Server Error'));
  }

  newUserCompanie(user: Users) {
    return this.http.post(`${this.url}${'Companies/newUserCompanie'}`, user, httpOptions)
    .toPromise()
    .then(res => res)
    .catch(err => Promise.reject(err.error || 'Server Error'));
  }

  newDepartmentCompanie(departament: Departament) {
    return this.http.post(`${this.url}${'Department/saveDepartment'}`, departament, httpOptions)
    .toPromise()
    .then(res => res)
    .catch(err => Promise.reject(err.error || 'Server Error'));
  }

  getUsersByCompanie(id_companie: number): Observable<Users> {
    const url = `${this.url}Companies/getUsersByCompanie/${id_companie}`;
    return this.http.get<Users>(url, httpOptions);
  }

  getDepartamentsCompanie(id_company: number): Promise<Departament[]> {
    const url = `${this.url}Department/getUserDepartment/${id_company}`;
    return this.http.get<Departament[]>(url, httpOptions)
    .toPromise()
    .then(res => res)
    .catch(err => Promise.reject(err.error || 'Server Error'));
  }
}
