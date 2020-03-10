import { FilterTextFeedbacksPipe } from './pipes/filter-text-feedbacks/filter-text-feedbacks.pipe';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToggleFullScreenDirective} from './fullscreen/toggle-fullscreen.directive';
import {AccordionAnchorDirective} from './accordion/accordionanchor.directive';
import {AccordionLinkDirective} from './accordion/accordionlink.directive';
import {ScrollingModule} from '@angular/cdk/scrolling'
import {AccordionDirective} from './accordion/accordion.directive';
import {HttpClientModule} from '@angular/common/http';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {TitleComponent} from '../layout/admin/title/title.component';
import {CardComponent} from './card/card.component';
import {CardToggleDirective} from './card/card-toggle.directive';
import {ModalBasicComponent} from './modal-basic/modal-basic.component';
import {ModalAnimationComponent} from './modal-animation/modal-animation.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {DataFilterPipe} from './elements/data-filter.pipe';
import {FilterFullPipe} from './elements/filter-full.pipe';
import { TypesContactPipe } from './pipes/types-contact.pipe';
import { FilterTagsPipe } from './pipes/filter-tags/filter-tags.pipe';
import { FilterUsersPipe } from './pipes/filter-users/filter-users.pipe';
import { FilterNameFeedbackPipe } from './pipes/filter-name-feedback/filter-name-feedbacks.pipe';
import { FilterContactsFeedbacksPipe } from './pipes/filter-contacts-feedbacks/filter-contacts-feedbacks.pipe';
import { TypeStatusAudiencePipe } from './pipes/status-audience/type-status-audience.pipe';
import { TypeChannelsPipe } from './pipes/type-channels/type-channels.pipe';
import { FilterCanalAudiencePipe } from './pipes/filter-canal-audience/filter-canal-audience.pipe';
import { FilterStatusAudiencePipe } from './pipes/filter-status-audience/filter-status-audience.pipe';
import { FilterAudiencePipe } from './pipes/filter-audience/filter-audience.pipe';
import { FilterDatesImportsAudiencePipe } from './pipes/filter-dates/filter-dates-imports-audience/filter-dates-imports-audience.pipe';
import { FilterDatesSchenduleAudiencePipe } from './pipes/filter-dates/filter-dates-schendule-audience/filter-dates-schendule-audience.pipe';
import { FilterDatesAnswerAudiencePipe } from './pipes/filter-dates/filter-dates-answer-audience/filter-dates-answer-audience.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    DataFilterPipe,
    FilterFullPipe,
    ScrollingModule,
    TypesContactPipe,
    FilterTagsPipe,
    FilterTextFeedbacksPipe,
    FilterUsersPipe,
    FilterNameFeedbackPipe,
    FilterContactsFeedbacksPipe,
    TypeStatusAudiencePipe,
    TypeChannelsPipe,
    FilterCanalAudiencePipe,    
    FilterStatusAudiencePipe ,
    FilterAudiencePipe  ,
    FilterDatesImportsAudiencePipe,
    FilterDatesSchenduleAudiencePipe,
    FilterDatesAnswerAudiencePipe
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    DataFilterPipe,
    FilterFullPipe,
    TypesContactPipe,
    FilterTagsPipe,
    FilterTextFeedbacksPipe,
    FilterUsersPipe,
    FilterNameFeedbackPipe,
    FilterContactsFeedbacksPipe,
    TypeStatusAudiencePipe,
    TypeChannelsPipe,
    FilterCanalAudiencePipe,
    FilterStatusAudiencePipe,
    FilterAudiencePipe,
    FilterDatesImportsAudiencePipe,
    FilterDatesSchenduleAudiencePipe,
    FilterDatesAnswerAudiencePipe
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
