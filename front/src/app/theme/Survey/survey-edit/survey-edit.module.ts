import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyEditComponent } from './survey-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyEditRoutingModule } from './survey-edit-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {ColorPickerModule} from 'ngx-color-picker';
import { QuillEditorModule } from 'ngx-quill-editor';
import { SelectModule } from 'ng-select';
import { UiSwitchModule } from 'ng2-ui-switch';


@NgModule({
  declarations: [
    SurveyEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SurveyEditRoutingModule,
    SharedModule,
    SelectModule,
    QuillEditorModule,
    UiSwitchModule,
    ColorPickerModule
  ]
})
export class SurveyEditModule { }
