import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as dashboard4 from '../../../shared/data/dashboard/dashboard4/dashboard4'

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};


@Component({
  selector: 'app-dashboard04',
  templateUrl: './dashboard04.component.html',
  styleUrls: ['./dashboard04.component.scss']
})
export class Dashboard04Component implements OnInit {
  public chartOptions!: Partial<ChartOptions>;

  //datepicker

  selected: any;
  alwaysShowCalendars: boolean;
  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }
  invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];


  isInvalidDate = (m: moment.Moment) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') )
  }
  
  
  constructor() {
    
    this.alwaysShowCalendars = true;

   
  }

  ngOnInit(): void {
    this.chartOptions = dashboard4.chartoptions;
  }
  public donutData = dashboard4.DonutChartData;
}
