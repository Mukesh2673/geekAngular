import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import * as moment from 'moment';
import * as dashboard3 from '../../../shared/data/dashboard/dashboard3/dashboard3'
@Component({
  selector: 'app-dashboard03',
  templateUrl: './dashboard03.component.html',
  styleUrls: ['./dashboard03.component.scss']
})
export class Dashboard03Component implements OnInit {


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
  }

  ngAfterViewInit(){
    

    const scroll:any = document.querySelectorAll('#scrollbar, #scrollbar2');
    function perfectChart(){
      scroll.forEach( (element:any)=>{
        const ps = new PerfectScrollbar(element,{
          wheelPropagation:true,
          suppressScrollX:true
        });
      } )
    }
    perfectChart()
  } 

  public echartHorizontalLineBarChart = dashboard3.echartHorizontalLineBarChart;
  public donutData = dashboard3.DonutChartData;

    // //CryptoChart

    public lineChartOptions:Partial<any> | any = dashboard3.lineChartOptions;
    public lineChartLabels:Partial<any> | any = dashboard3.lineChartLabels;
    public lineChartType:Partial<any> | any = dashboard3.lineChartType;
    public lineChartLegend:Partial<any> | any = dashboard3.lineChartLegend;
    public lineChartColors:Partial<any> | any = dashboard3.lineChartColors;
    public lineChartData:Partial<any> | any = dashboard3.lineChartData;
}
