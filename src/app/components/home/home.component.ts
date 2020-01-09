import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    barChartOptions: ChartOptions = {
        responsive: true,
      };
      barChartLabels: Label[] = ['Apple', 'Samsung', 'Lenovo', 'Huawei', 'Oppo', 'Xiaomi'];
      barChartType: ChartType = 'bar';
      barChartLegend = true;
      barChartPlugins = [];

      barChartData: ChartDataSets[] = [
        { data: [45, 37, 60, 70, 46, 50], label: 'Best Gadgets' }
      ];

      doughnutChartLabels: Label[] = ['Beans', 'Air pods', 'Chargers'];
        doughnutChartData: MultiDataSet = [
            [55, 25, 20]
        ];
        doughnutChartType: ChartType = 'doughnut';


  constructor() {}
  ngOnInit() {
  }


}
