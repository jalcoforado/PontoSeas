import { Companies } from 'src/Models/Companie';
import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../company.service';
import { ToastService } from 'src/app/shared/Auxiliary Services/toast.service';

@Component({
  selector: 'company-notifications',
  templateUrl: './company-notifications.component.html',
  styleUrls: ['./company-notifications.component.scss', '../../../../assets/icon/icofont/css/icofont.scss']
})
export class CompanyNotificationsComponent implements OnInit {
  @Input() Companie: Companies;

  editProfileIcon = 'icofont-edit';
  editProfile = true;
  public toolbarOptions = [
    ['bold', 'italic', 'strike']
  ];
  public editorOptions = { modules: {
    toolbar: this.toolbarOptions
  }};

  constructor(private _service: CompanyService, private _toast: ToastService) { }

  ngOnInit() {
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

  UpdateCompany(f) {
      this._service.updateCompanie(this.Companie).then(x => { this.toggleEditProfile(),
                                                            this._toast.toastAlert('Empresa Atualizada com Sucesso!!' , 'success'); });
  }
}
