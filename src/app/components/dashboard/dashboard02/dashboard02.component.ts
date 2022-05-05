import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as dashboard2 from '../../../shared/data/dashboard/dashboard2/dashboard2'
@Component({
  selector: 'app-dashboard02',
  templateUrl: './dashboard02.component.html',
  styleUrls: ['./dashboard02.component.scss']
})
export class Dashboard02Component implements OnInit {

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
  
  public statusData = dashboard2.StatusData;
  public donutData = dashboard2.DonutChartData;

  Goal = "Goal"
}