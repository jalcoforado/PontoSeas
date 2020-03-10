import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Surveys } from 'src/Models/Surveys';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SurveyService { 
  url: string = environment.API;

  constructor(private http: HttpClient) { }

  getSurveyById(id_survey: number, id_company : number): Promise<Surveys>{
    const url = `${this.url}Survey/getSurveyById/${id_survey}/${id_company}`;
    return this.http.get<Surveys>(url, httpOptions)
    .toPromise()
    .then(res => { return res })
    .catch(err => { return Promise.reject(err.error || 'Server Error') })
  }

  getSurveysByCompanyId(id_company:number): Observable<Surveys>{
    const url = `${this.url}Survey/SurveysByCompanyId/${id_company}`;
    return this.http.get<Surveys>(url, httpOptions)
  }
  
  saveSurvey(survey: Surveys){  
    return this.http.post(`${this.url}${'Survey/newSurvey'}`,survey, httpOptions)
      .toPromise()      
      .then(res => { return res })
      .catch(err => { return Promise.reject(err.error || 'Server Error') })
  }

  updateSurvey(survey: Surveys){
    return this.http.post(`${this.url}${'Survey/updateSurvey'}`,survey,httpOptions)
    .toPromise()
    .then(res => {return res})
    .catch(err => {return Promise.reject(err.error || 'Server Error')})
  }

  updateActiveSurvey(id_survey: number){
    return this.http.post(`${this.url}Survey/updateActive/${id_survey}`, httpOptions)
    .toPromise()
    .then(res => {return res})
    .catch(err => {return Promise.reject(err.error || 'Server Error')})
  }

  cloneSurvey(id_survey: number){
    return this.http.post(`${this.url}Survey/gerateCopyTheSurvey/${id_survey}`,httpOptions)
    .toPromise()
    .then(res => {return res})
    .catch(err => {return Promise.reject(err.error || 'Server Error')})
  }

  deleteSurvey(survey: Surveys){
    return this.http.post(`${this.url}${'Survey/deleteSurvey'}`,survey,httpOptions)
    .toPromise()
    .then(res => {return res})
    .catch(err => {return Promise.reject(err.error || 'Server Error')})
  }
}
