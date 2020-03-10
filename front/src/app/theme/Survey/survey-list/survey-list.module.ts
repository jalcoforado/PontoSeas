import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyListRoutingModule } from './survey-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SurveyListComponent } from './survey-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UiSwitchModule} from 'ng2-ui-switch';
import { SelectModule } from 'ng-select';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [SurveyListComponent],
  imports: [
    CommonModule,
    SurveyListRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,    
    UiSwitchModule,
    ClipboardModule,
    SelectModule,
    NgxSpinnerModule
  ]
})
export class SurveyListModule { }
