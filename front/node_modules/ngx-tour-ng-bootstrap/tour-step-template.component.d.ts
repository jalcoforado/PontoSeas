import { TourHotkeyListenerComponent, IStepOption } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { TemplateRef, AfterContentInit } from '@angular/core';
import { NgbTourService } from './ng-bootstrap-tour.service';
export declare class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {
    private tourStepTemplateService;
    tourService: NgbTourService;
    defaultTourStepTemplate: TemplateRef<any>;
    stepTemplate: TemplateRef<{
        step: IStepOption;
    }>;
    constructor(tourStepTemplateService: TourStepTemplateService, tourService: NgbTourService);
    ngAfterContentInit(): void;
}
