import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Surveys } from 'src/Models/Surveys';
import { SurveyService } from '../survey.service';
import swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();
@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SurveyEditComponent implements OnInit {
  dropdownPlaces: any;
  public arrayColorsBackground: any = {};
  public selectedColorBackground = 'color';
  public colorLetter = '#fff';
  public arrayColorsLetter: any = {};
  public selectedColorLetter = 'colorLetter';
  public toolbarOptions = [
    ['bold', 'italic', 'strike']
  ];
  public editorOptions = {
    modules: {
      toolbar: this.toolbarOptions
    }
  };

  url: string;
  idSurvey: number;
  idCompany: number;
  survey = new Surveys();

  constructor(private _npsService: SurveyService, private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(params => this.idSurvey = params['id_survey']);
    const jwt = helper.decodeToken(localStorage.getItem('jwt'));
    this.idCompany = jwt.ID_COMPANY;
    this.arrayColorsBackground['color'] = '#2883e9';
    this.arrayColorsLetter['colorLetter'] = '#fff';
  }

  ngOnInit() {
    this._npsService.getSurveyById(this.idSurvey, this.idCompany).then(a => this.verifySurvey(a));
  }

  verifySurvey(s: Surveys) {
    if (s == null) {
      this.router.navigate(['404']);
    } else {
      const jsonColor = JSON.parse(s.color_button);
      this.arrayColorsBackground['color'] = jsonColor != null ? jsonColor['background-color'] : this.arrayColorsBackground['color'];
      this.arrayColorsLetter['colorLetter'] = jsonColor != null ? jsonColor['color'] : this.arrayColorsLetter['colorLetter'];
      this.survey = s;
      console.log(s);
    }
  }

  modalFinish() {
    // tslint:disable-next-line: deprecation
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    Toast({
      type: 'success',
      title: 'Sua pesquisa foi atualizada com sucesso!'
    });
  }
  gotolist() {
    this.router.navigate(['survey-list']);
  }
  onSubmit(f) {
    this.survey.color_button = JSON.stringify({
      'background-color': this.arrayColorsBackground['color'],
      'color': this.arrayColorsLetter['colorLetter']
    });
    this._npsService.updateSurvey(this.survey).then(() => {
      this.modalFinish(),
      this.router.navigate(['survey-list']);
    }).catch(x => console.log(x));
  }
}
