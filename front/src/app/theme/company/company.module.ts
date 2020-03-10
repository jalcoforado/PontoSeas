import { SelectModule } from 'ng-select';
import { CompanyService } from './company.service';
import { CompanyComponent } from './company-principal/company.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-principal/company-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuillEditorModule } from 'ngx-quill-editor';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'angular2-datatable';
import { CompanyNotificationsComponent } from './company-notifications/company-notifications.component';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyNotificationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SelectModule,
    QuillEditorModule,
    HttpClientModule,
    DataTableModule,
  ],
  providers: [CompanyService]
})
export class CompanyModule { }
