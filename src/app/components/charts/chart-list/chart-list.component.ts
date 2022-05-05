import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/chartlist'

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss']
})
export class ChartListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    // Charts
    public chart1 = chartData.chart1;
    public chart2 = chartData.chart2;
    public chart3 = chartData.chart3;
    public chart4 = chartData.chart4;
    public chart5 = chartData.chart5;
    public chart6 = chartData.chart6;
    public chart7 = chartData.chart7;
    public chart8 = chartData.chart8;
    public chart9 = chartData.chart9;
    public chart10 = chartData.chart10;
    public chart11 = chartData.chart11;

}
