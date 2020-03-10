import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-integrations-principal',
  templateUrl: './integrations-principal.component.html',
  styleUrls: ['./integrations-principal.component.scss', '../../../../assets/icon/icofont/css/icofont.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class IntegrationsPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
