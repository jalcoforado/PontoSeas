import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyCreateRoutingModule } from './survey-create-routing.module';
import { SurveyCreateComponent } from './survey-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {ColorPickerModule} from 'ngx-color-picker';
import { QuillEditorModule } from 'ngx-quill-editor';
import { SelectModule } from 'ng-select';
import { UiSwitchModule } from 'ng2-ui-switch/dist/ui-switch.module';

@NgModule({
  declarations: [
    SurveyCreateComponent,
  ],
  imports: [
    SurveyCreateRoutingModule,
    CommonModule,
    QuillEditorModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule ,
    SharedModule,
    UiSwitchModule,
    ColorPickerModule
  ]
})

export class SurveyCreateModule { }
