import { Component, OnInit } from '@angular/core';
/*import { TourService, IStepOption } from 'ngx-tour-ng-bootstrap';*/

@Component({
  selector: 'app-adv-tour',
  templateUrl: './adv-tour.component.html',
  styleUrls: ['./adv-tour.component.scss']
})
export class AdvTourComponent implements OnInit {

  constructor() { // public tourService: TourService
    /*this.tourService.events$.subscribe(console.log);*/
    /*this.tourService.initialize([{
        anchorId: 'start.tour',
        content: 'This is Card Header',
        placement: 'bottom',
        title: 'Step - 1',
      }, {
        anchorId: 'tour2',
        content: 'This is Card body',
        title: 'Step-2',
      }, {
        anchorId: 'tour3',
        content: 'This is Card body',
        title: 'Step-3',
      }, {
        anchorId: 'tour4',
        content: 'This is Card body',
        title: 'Step-4',
      }, {
        anchorId: 'tour5',
        content: 'This is Button with Primary Color',
        title: 'Step-5',
      }, {
        anchorId: 'tour6',
        content: 'This is Card Header.',
        title: 'Step-6',
      }, {
        anchorId: 'tour7',
        content: 'This is Card body',
        title: 'Step-7',
      }]
    );
    this.tourService.start();*/
  }

  ngOnInit() {
  }

}
