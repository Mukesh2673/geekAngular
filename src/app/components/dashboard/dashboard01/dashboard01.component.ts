import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import PerfectScrollbar from 'perfect-scrollbar';
import * as dashboard1 from '../../../shared/data/dashboard/dashboard1/dashboard1'



@Component({
  selector: 'app-dashboard01',
  templateUrl: './dashboard01.component.html',
  styleUrls: ['./dashboard01.component.scss']
})
export class Dashboard01Component implements OnInit {

  //country
  width = '100%';
  type = "world";
  dataFormat = "json";
  dataSource = dashboard1.data;

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

    //Line Chart
    public lineChartOptions = dashboard1.lineChartOptions
    public lineChartLabels = dashboard1.lineChartLabels
    public lineChartType = dashboard1.lineChartType
    public lineChartLegend = dashboard1.lineChartLegend
    public lineChartData = dashboard1.lineChartData
    public lineChartColors = dashboard1.lineChartColors
  

  // //Sparklines Chart
  public ApexData1:Partial<any>  = dashboard1.ApexData1;
  public ApexData2:Partial<any>  = dashboard1.ApexData2;
  public ApexData3:Partial<any>  = dashboard1.ApexData3;


  ngAfterViewInit(){
    const scroll:any = document.querySelectorAll('.countryscroll, .scrollbar, .scrollbar2, .scrollbar3');
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
  
}
