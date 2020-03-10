import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArchwizardModule} from 'ng2-archwizard/dist';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { TextMaskModule } from 'angular2-text-mask';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ArchwizardModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TextMaskModule,
    ColorPickerModule,
    DeviceDetectorModule.forRoot()
  ],
  exports:[
    
  ],
  providers:[]
})
export class NpsQuestionsModule { }
