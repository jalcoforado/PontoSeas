import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const AmCharts: any;
declare var $: any;


import '../../../../../assets/charts/amchart/amcharts.js';
import '../../../../../assets/charts/amchart/gauge.js';
import '../../../../../assets/charts/amchart/pie.js';
import '../../../../../assets/charts/amchart/serial.js';
import '../../../../../assets/charts/amchart/light.js';
import '../../../../../assets/charts/amchart/ammap.js';
import '../../../../../assets/charts/amchart/usaLow.js';

import '../../../../../assets/charts/float/jquery.flot.js';
import '../../../../../assets/charts/float/jquery.flot.categories.js';
import '../../../../../assets/charts/float/curvedLines.js';
import '../../../../../assets/charts/float/jquery.flot.tooltip.min.js';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [
    './breadcrumb.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  


  barChartData =  {
    chartType: 'ComboChart',
    dataTable: [
      ['Date', 'Promoters', 'Passives', 'Detractors'],
      ['01/05/2018', 87, 7, 6],
      ['02/05/2018', 84, 7, 9],
      ['03/05/2018', 86, 9, 5],
      ['04/05/2018', 89, 8, 3],
      ['05/05/2018', 87, 7, 6],
      ['06/05/2018', 84, 7, 9],
      ['07/05/2018', 15, 9, 76],
      ['08/05/2018', 16, 81, 3],
      ['09/05/2018', 12, 82, 6],
      ['10/05/2018', 85, 6, 9],
      ['11/05/2018', 15, 0, 85],
      ['12/05/2018', 80, 8, 2],
      ['13/05/2018', 70, 10, 20],
      ['14/05/2018', 10, 0, 90],
      ['15/05/2018', 15, 20, 65],
      ['16/05/2018', 10, 60, 30],
      ['17/05/2018', 25, 70, 6],
      ['18/05/2018', 50, 30, 20],
      ['19/05/2018', 30, 70, 0],
      ['20/05/2018', 45, 45, 10],                        
      ['21/05/2018', 100, 0, 0],
      ['22/05/2018', 10, 70, 20],
      ['23/05/2018', 10, 45, 45],
      ['24/05/2018', 75, 0, 25],
      ['25/05/2018', 30, 40, 30],
      ['26/05/2018', 10, 40, 50],
      ['27/05/2018', 10, 90, 0],
      ['28/05/2018', 10, 90, 0],
      ['29/05/2018', 20, 40, 40],                                    
      ['30/05/2018', 30, 60, 10]
    ],
    options: {
      height: 400,
      title: '',
      chartArea: { width: '75%' },
      isStacked: true,
      hAxis: {
        title: 'Total Surveys',
        minValue: 0,
      },
      seriesType: 'bars',
      vAxis: {
        title: 'Day'
      },
      colors: ['#9ccc65', '#ffba57', 'ff5252']
    },
  };

  gaugeChartData =  {
    chartType: 'Gauge',
    dataTable: [
      ['#9ccc65', '#ffba57'],
      ['NPS', 70]
    ],
    options: {
      width: 400,
      height: 120,
      redFrom: -100,
      redTo: 30,
      yellowFrom: 30,
      yellowTo: 50,
      greenFrom: 50,
      greenTo: 100,
      minorTicks: -100
    },
  };


  constructor() {
    
   }

  ngOnInit() {
    AmCharts.makeChart('daily-sales', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': [{
        'country': '0',
        'visits': 10,
        'color': '#ff5252'
      }, {
        'country': '1',
        'visits': 8,
        'color': '#ff5252'
      },{
        'country': '2',
        'visits': 8,
        'color': '#ff5252'
      },{
        'country': '3',
        'visits': 8,
        'color': '#ff5252'
      },{
        'country': '4',
        'visits': 8,
        'color': '#ff5252'
      },{
        'country': '5',
        'visits': 8,
        'color': '#ff5252'
      },{
        'country': '6',
        'visits': 8,
        'color': '#ff5252'
      },{
        'country': '7',
        'visits': 8,
        'color': '#ffba57'
      },{
        'country': '8',
        'visits': 8,
        'color': '#ffba57'
      }, {
        'country': '9',
        'visits': 5,
        'color': '#9ccc65'
      }, {
        'country': '10',
        'visits': 7,
        'color': '#9ccc65'
      }],
      'valueAxes': [{
        'axisAlpha': 0,
        'lineAlpha': 0,
        'gridAlpha': 0,
        'position': 'left',
        'fontSize': 0
      }],
      'startDuration': 1,
      'graphs': [{
        'balloonText': '<b>[[category]]: [[value]]</b>',
        'fillColorsField': 'color',
        'fillAlphas': 0.9,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'visits'
      }],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'country',
      'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 1,
        'lineAlpha': 0,
        'gridAlpha': 0
      },
      'export': {
        'enabled': true
      }
    });
  }

}
