import { IOption } from 'ng-select';
import { Departament } from '../../../../Models/Deparmanent';
import { Companies } from 'src/Models/Companie';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserProfile } from '../../user/user-profile/user-profile.component';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, animate, style } from '@angular/animations';
import { CompanyService } from '../company.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastService } from 'src/app/shared/Auxiliary Services/toast.service';
import { Users } from 'src/Models/Users';

const helper = new JwtHelperService();

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss', '../../../../assets/icon/icofont/css/icofont.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CompanyComponent implements OnInit {
  dropdownDepart: any;
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  public editor;
  public editorContent: string;
  public editorConfig = {
    placeholder: 'About Your Self'
  };

  public data: Observable<UserProfile>;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  Companie: Companies;
  id_company: number;
  nameUser: string;
  usersCompanie: Observable<Users>;
  departments: Departament[];
  newDepartament: Departament = new Departament;
  newUser = new Users();
  errorUser = null;

  constructor(public httpClient: HttpClient, private _service: CompanyService, private _toast: ToastService) {
    const jwt = helper.decodeToken(localStorage.getItem('jwt'));
    this.nameUser = localStorage.getItem('nameUser');
    this.id_company = jwt.ID_COMPANY;
  }

  ngOnInit() {
    this.loadingCompany();
  }

  loadingCompany()
  {
    this._service.getCompanyById(this.id_company).then(x => this.Companie = x);
    this._service.getUsersByCompanie(this.id_company).subscribe(x => { this.usersCompanie = of(x)});
    this._service.getDepartamentsCompanie(this.id_company).then(x => {this.departments = x, this.dropdownDepartment(x) } );
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  submitProfile() {
    this._service.updateCompanie(this.Companie).then(x => { this.toggleEditProfile(),
                                                          this._toast.toastAlert('Companie update with Success' , 'success'); });
  }

  openModalNewUser() {
    document.querySelector('#' + 'modal-new-user').classList.add('md-show');
  }

  closeModalUser() {
    document.querySelector('#' + 'modal-new-user').classList.remove('md-show');
  }

  openModalNewDepartment() {
    document.querySelector('#' + 'modal-new-department').classList.add('md-show');
  }

  closeModalDepartment() {
    document.querySelector('#' + 'modal-new-department').classList.remove('md-show');
    this.newDepartament = new Departament;
  }

  onSubmit(f) {
    this.newUser.fk_company_default = this.id_company;
    this._service.newUserCompanie(this.newUser).then(x => { this.loadingCompany(), this.closeModalUser(),
      this._toast.swalAlert('Invitation sent',
                            'Please, ask the user to verify their email to finalize the registration' ,
                            'success'), this.newUser = new Users(); })
                            .catch(x => this.errorUser = x.error);
  }

  onSubmitDeparment(f)
  {
    this.newDepartament.fk_company = this.id_company;
    this.newDepartament.actived = true;
    this._service.newDepartmentCompanie(this.newDepartament)
    // tslint:disable-next-line: no-unused-expression
    .then(x => { this.loadingCompany(), this.closeModalDepartment(), this._toast.swalAlert('Departamento Salvo',
    'Departamento Salvo com Sucesso' ,
    'success');});
  }

  dropdownDepartment(departaments: Departament[]){
    this.dropdownDepart = departaments.map(department => ({ value: department.id_department.toString(), label: department.name }));
}
}
