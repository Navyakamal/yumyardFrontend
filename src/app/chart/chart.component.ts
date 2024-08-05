import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions = {}

  constructor(){
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
           backgroundColor: 'rgb(234, 227, 227)',
           height:'300px'
      },
      title: {
          text: 'Total Menu',
          align: 'center',
          verticalAlign: 'middle',
          y: 60,
          style: {
              fontSize: '1.1em'
          }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'        }
            },
            credits:{
              enabled:false
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [ ['Main Course', 73.86],
                ['Starter', 11.97],
                ['Appetizer', 5.52],
                ['Dessert', 2.98],
                ['Drinks', 1.90],
                ['Other', 3.77]
            ]
        }]
    }
  }
}
