import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { TourAnchorDirective } from 'ngx-tour-core';
import { NgbTourService } from './ng-bootstrap-tour.service';
import { INgbStepOption } from './step-option.interface';
import { TourStepTemplateService } from './tour-step-template.service';
export declare class TourAnchorNgBootstrapPopoverDirective extends NgbPopover {
}
export declare class TourAnchorNgBootstrapDirective implements OnInit, OnDestroy, TourAnchorDirective {
    private tourService;
    private tourStepTemplate;
    private element;
    private popoverDirective;
    tourAnchor: string;
    isActive: boolean;
    constructor(tourService: NgbTourService, tourStepTemplate: TourStepTemplateService, element: ElementRef, popoverDirective: TourAnchorNgBootstrapPopoverDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: INgbStepOption): void;
    hideTourStep(): void;
}
