import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/charts/apex_chart';

@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.scss']
})
export class ApexChartsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public RandomData = chartData.ApexRandomData;
  public apexData = chartData.ApexChartData;
  public barData = chartData.BarData;
  public stackedbarData = chartData.StackedBarData;
  public donutData = chartData.DonutChartData;
  public pieData = chartData.PieChartData;
  public radicalbarData = chartData.RadialBarCircleData;
  public radicalmultipleData = chartData.RadialBarCircleMultipleData;

}
