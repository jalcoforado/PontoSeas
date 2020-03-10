import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export class Persona{
  id: number;
  name: string;
  age: number;
  where_live: string;
  where_work: string;
  what_position: string;
  education_personality: string;
  url_photo: string;
}

@Component({
  selector: 'app-basic-other',
  templateUrl: './basic-other.component.html',
  styleUrls: ['./basic-other.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicOtherComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
