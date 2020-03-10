import { Surveys } from '../../../../Models/Surveys';
import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from '../survey.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { stringify } from 'querystring';

const helper = new JwtHelperService();
@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})
export class SurveyCreateComponent implements OnInit {
  dropdownPlaces: any;
  public arrayColorsBackground: any = {};
  public selectedColorBackground = 'color';
  public colorLetter = '#fff';
  public arrayColorsLetter: any = {};
  public selectedColorLetter = 'colorLetter';
  survey = new Surveys();
  public color = '';
  public toolbarOptions = [
    ['bold', 'italic', 'strike']
  ];
  public editorOptions = { modules: {
    toolbar: this.toolbarOptions
  }};
  constructor(private _npsService: SurveyService, private route: ActivatedRoute,
              private router: Router) {
    let jwt = helper.decodeToken(localStorage.getItem('jwt'))
    this.survey.fk_user_create = jwt.ID;
    this.survey.fk_company = jwt.ID_COMPANY;
    this.arrayColorsBackground['color'] = '#2883e9';
    this.arrayColorsLetter['colorLetter'] = '#fff';
  }
  
  ngOnInit() {
    this.survey.flag_wizard = true;
  }

  onSubmit(f) {
    this.survey.color_button = JSON.stringify({"background-color": this.arrayColorsBackground['color'], "color": this.arrayColorsLetter['colorLetter']})
    this._npsService.saveSurvey(this.survey).then(() => { this.modalFinish(), this.router.navigate(["survey-list"]) });
  }

  modalFinish() {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });    
    Toast({
      type: 'success',
      title: 'Sua pesquisa foi criada com sucesso!'
    })   
  }
}
