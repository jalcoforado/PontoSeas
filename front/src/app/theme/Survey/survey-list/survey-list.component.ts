import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Surveys } from 'src/Models/Surveys';
import { SurveyService } from '../survey.service';
import swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from 'ngx-spinner';
import { saveAs } from 'file-saver';

const helper = new JwtHelperService();
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.scss', '../../../../assets/icon/icofont/css/icofont.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SurveyListComponent implements OnInit {
  url: string = environment.URL + 'survey-response/';
  id_company: number;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public dataSurvey: Observable<Surveys>;

  constructor(private _npsService: SurveyService, public httpClient: HttpClient, private router: Router, private spinner: NgxSpinnerService) { 
    let jwt = helper.decodeToken(localStorage.getItem('jwt'))
    this.id_company = jwt.ID_COMPANY;    
    this.loadingSurveyList(false)
  }

  ngOnInit() { 
    this.spinner.hide()
  }

  changeActive(id_survey: number, active: boolean) {
    let status = active ? "Disabled" : "Enabled";
    swal({
      title: 'Confirmação',
      text: 'Você deseja alterar o status para ' + status + ' dessa pesquisa?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#99d34a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger mr-sm'
    }).then((result) => {
      if (result.value) {
        this._npsService.updateActiveSurvey(id_survey).then(() => {
          this.loadingSurveyList(false), swal(
            status + '!',
            'Status de sua pesquisa foi modificada para ' + status + '.',
            'success'
          );
        }).catch(x => console.log(x));

      } else if (result.dismiss) {
        this.loadingSurveyList(false);
        status = status == "Enabled" ? "Disabled" : "Enabled";
        swal(
          'Cancelado',
          'O status da pesquisa é ' + status + ' :)',
          'error'
        );
      }
    });
  }

  deleteSurvey(survey: Surveys) {
    swal({
      title: 'Deseja confinuar',
      text: 'Você deseja excluir essa pesquisa?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#99d34a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
      cancelButtonText: 'No',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger mr-sm'
    }).then((result) => {
      if (result.value) {
        this._npsService.deleteSurvey(survey).then(() => {
          this.loadingSurveyList(false), swal(
            'Deleted',
            'Pesquisa excluída com sucesso.',
            'success'
          );
        }).catch(x => console.log(x));

      } else if (result.dismiss) {
        swal(
          'Cancelled',
          'Sua pesquisa ainda está aqui :)',
          'error'
        );
      }
    });
  } 

  modalFinish(textAlert: string) {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });    
    Toast({
      type: 'success',
      title: textAlert
    })
  }

  modalWait(titleWait:string, textWait: string){
    swal({
      title: titleWait,
      text: textWait,
      onOpen: function () {
        swal.showLoading()
      }})
  }

  cloneSurvey(id_survey: number){
    this.modalWait('Copiar pesquisa', 'Aguarde a cópia...')
    this._npsService.cloneSurvey(id_survey).then(x => {swal.close(), this.modalFinish('Pesquisa copiada com sucesso'),this.router.navigate(["survey-edit/" + x])}).catch(x => console.log(x));
  }

  loadingSurveyList(closeModal: boolean) { 
    this._npsService.getSurveysByCompanyId(this.id_company).subscribe(x => {this.dataSurvey = of(x), closeModal ? swal.close() : null});
  }  

  downloadCSV(idSurvey: string){
    swal({
      title: 'Ops,  essa funcionalidade somente na versão premium!',
      text: 'Por favor, ative a versão premium!',
      type: 'info',
    }), function(){
      swal.close();
    }    
    //this._npsService.getDownloadCSV(this.id_company, idSurvey, 60).subscribe(x => {this.dataSurvey = of(x)});
  }


}
