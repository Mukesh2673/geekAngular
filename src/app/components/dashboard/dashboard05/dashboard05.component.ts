import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { OwlOptions } from 'ngx-owl-carousel-o';
import PerfectScrollbar from 'perfect-scrollbar';
import * as chartData from '../../../shared/data/dashboard/dashboard5/dashboard5'

@Component({
  selector: 'app-dashboard05',
  templateUrl: './dashboard05.component.html',
  styleUrls: ['./dashboard05.component.scss']
})
export class Dashboard05Component implements OnInit {
  
  active:any;
  customOptions!: OwlOptions
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
    this.customOptions = {
      loop: true,
      autoplay: true,
      slideTransition: 'linear',
      autoplaySpeed: 4900,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      center: true,
      margin: 12,
      dots: false,
      rewind: false,
      lazyLoad: false,
      nav:false,
      responsive: {
        0 : {
          items : 1
        },
        300: {
          items: 1.5
        },
        
        400: {
          items: 2
        },
        640 : {
          items: 3
        },
        768 : {
          items : 3
        },
  
        900 : {
          items: 5
        },
        1200: {
          items: 6
        },
        1600: {
          items: 7
        }
      }
  }
  }
  owlCarouselData = [
    { id: 1, src: '../../assets/images/crypto-currencies/round-outline/AquariusCoin.svg', name:'USD', value1: '$0.025' , value2: '-0.78%',arrow:'down-c' },
    { id: 2, src: '../../assets/images/crypto-currencies/round-outline/Augur.svg', name:'USD', value1: '$45.25', value2: '12.85%',arrow:'up-c' },
    { id: 3, src: '../../assets/images/crypto-currencies/round-outline/Bitcoin.svg', name:'USD', value1: '$15.45' , value2: '-0.78%',arrow:'up-c' },
    { id: 4, src: '../../assets/images/crypto-currencies/round-outline/BitConnect.svg', name:'USD', value1: '$5.15', value2: '-11.85%',arrow:'down-c' },
    { id: 5, src: '../../assets/images/crypto-currencies/round-outline/BitShares.svg', name:'USD', value1:'$135.25', value2: '-0.78%',arrow:'ip-c' },
    { id: 6, src: '../../assets/images/crypto-currencies/round-outline/Bytecoin.svg', name:'USD', value1: '$34.65', value2:'-0.32%' ,arrow:'down-c'},
    { id: 7, src: '../../assets/images/crypto-currencies/round-outline/Dash.svg', name:'USD' , value1: '$67.35', value2: '-0.78%',arrow:'up-c' },
    { id: 8, src: '../../assets/images/crypto-currencies/round-outline/EOS.svg', name:'USD', value1: '$7.55', value2: '-1.42%' ,arrow:'down-c'},
    { id: 9, src: '../../assets/images/crypto-currencies/round-outline/Ethereum.svg', name:'USD', value1: '$4.25', value2: '-0.78%' ,arrow:'up-c'},
    { id: 10, src: '../../assets/images/crypto-currencies/round-outline/Golem.svg', name:'USD', value1: '$6.05', value2: '-0.78%',arrow:'down-c' },
    { id: 11, src: '../../assets/images/crypto-currencies/round-outline/Iconomi.svg', name:'USD', value1: '$34.65', value2:'-0.32%',arrow:'up-c' },
    { id: 12, src: '../../assets/images/crypto-currencies/round-outline/IOTA.svg', name:'USD', value1: '$67.325', value2: '-0.78%',arrow:'down-c' },
    { id: 13, src: '../../assets/images/crypto-currencies/round-outline/LanaCoin.svg', name:'USD', value1: '$7.25', value2: '-1.42%' ,arrow:'up-c'},
    { id: 14, src: '../../assets/images/crypto-currencies/round-outline/Ethereum.svg', name:'USD', value1: '$4.35', value2: '-0.78%' ,arrow:'down-c'},
    { id: 15, src: '../../assets/images/crypto-currencies/round-outline/Litecoin.svg', name:'USD', value1: '$5.55', value2: '-1.32%',arrow:'up-c' },
    { id: 16, src: '../../assets/images/crypto-currencies/round-outline/Monero.svg', name:'USD', value1: '$6.25', value2: '-0.78%',arrow:'down-c' },
    { id: 17, src: '../../assets/images/crypto-currencies/round-outline/NEM.svg', name:'USD', value1: '$6.05', value2: '-0.78%' },

  ]

  
  public echartHorizontalLineBarChart = chartData.echartHorizontalLineBarChart;
  
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
}
