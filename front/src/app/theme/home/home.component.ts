import { PageView } from 'src/Models/PageView';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {
  chartScoreDistribution: any;
  id_company: number;
  views: PageView[] = [];
  countViews: number;

  constructor() { 
    let jwt = helper.decodeToken(localStorage.getItem('jwt'))
    this.id_company = jwt.ID_COMPANY;
  }

  ngOnInit() {
    
  }

}