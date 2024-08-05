import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {}


  constructor() {
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: 'rgb(234, 227, 227)',
      },
      title: {
        text: 'Order vs Sales',
        align: 'left'
      },
     
      xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
        crosshair: true,
        accessibility: { description: 'Countries' }
      },
      yAxis: {
        min: 0,
        title: {
          text: '1000 metric tons (MT)'
        }
      },
      tooltip: {
        valueSuffix: ' (1000 MT)'
      },
      credits:{
        enabled:false
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          name: 'Order',
          data: [387749, 280000, 129000, 64300, 54000, 34300]
        },
        {
          name: 'Sales',
          data: [45321, 140000, 10000, 140500, 19500, 113500]
        }
      ]
    };
  }
}
