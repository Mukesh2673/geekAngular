import { Component, OnInit } from '@angular/core';
import * as chartData from '../../../shared/data/chats/chartwidgets';

@Component({
  selector: 'app-chart-widgets',
  templateUrl: './chart-widgets.component.html',
  styleUrls: ['./chart-widgets.component.scss']
})
export class ChartWidgetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    //Apex Charts
    public ApexData1:Partial<any> = chartData.ApexData1;
    public ApexData2:Partial<any> = chartData.ApexData2;
    public ApexData3:Partial<any> = chartData.ApexData3;
  
    // //Sparklines Chart
    public ApexSparklines1:Partial<any>  = chartData.ApexSparklines1;
    public ApexSparklines2:Partial<any>  = chartData.ApexSparklines2;
    public ApexSparklines3:Partial<any>  = chartData.ApexSparklines3;
    public ApexSparklines4:Partial<any>  = chartData.ApexSparklines4;
  
    // //CryptoChart
  
    public lineChartOptions:Partial<any> | any = chartData.lineChartOptions;
    public lineChartLabels:Partial<any> | any = chartData.lineChartLabels;
    public lineChartType:Partial<any> | any = chartData.lineChartType;
    public lineChartLegend:Partial<any> | any = chartData.lineChartLegend;
    public lineChartColors:Partial<any> | any = chartData.lineChartColors;
    public lineChartData:Partial<any> | any = chartData.lineChartData;
    public lineChartData1:Partial<any> | any = chartData.lineChartData1;
    public lineChartData2:Partial<any>| any = chartData.lineChartData2;
    public lineChartData3:Partial<any> | any = chartData.lineChartData3;
}
