import { Tokens } from './../../../../Models/Tokens';
import { IntegrationsService } from './../integrations.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToastService } from 'src/app/shared/Auxiliary Services/toast.service';
import swal from 'sweetalert2';

const helper = new JwtHelperService();
@Component({
  selector: 'integrations-tokens',
  templateUrl: './integrations-tokens.component.html',
  styleUrls: ['./integrations-tokens.component.scss', '../../../../assets/icon/icofont/css/icofont.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class IntegrationsTokensComponent implements OnInit {
  id_company: any;
  public rowsOnPage = 10;
  public sortBy = '';
  public sortOrder = 'desc';
  public dataTokens: Tokens[] = [];

  constructor(private _serviceIntegrations: IntegrationsService, private _toast: ToastService) {
    const jwt = helper.decodeToken(localStorage.getItem('jwt'));
    this.id_company = jwt.ID_COMPANY;
  }

  ngOnInit() {
    this.loadTokens();
  }

  loadTokens(){
    this._serviceIntegrations.getTokensByCompany().then(x => this.dataTokens = x);
  }

  newToken(){
    swal({
      title: 'Confirmação',
      text: 'Deseja Criar um novo Token? ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#99d34a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger mr-sm'
    }).then((result) => {
      if (result.value) {
          this._serviceIntegrations.generateToken().then(x => { this._toast.toastAlert('Token gerado com Sucesso!' , 'success'), 
                                                                this.loadTokens(); });
      }
    });
  }

}
