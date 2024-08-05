import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {}

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: 'rgb(234, 227, 227)',
      },
      title: {
        text: 'Monthly Average Sale'
      },
      
      xAxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ]
      },
      yAxis: {
        title: {
          text: 'Sale '
        }
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Reggane',
        data: [
          16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
          22.0, 17.8
        ]
      }, {
        name: 'Tallinn',
        data: [
          -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9
        ]
      }]
    };
  }
}
