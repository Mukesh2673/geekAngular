import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
import * as chartData from '../../../shared/data/charts/chartjs';
@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  @ViewChild('Canvas') Canvas: ElementRef | any;
  @ViewChild('myCanvas') myCanvas: ElementRef | any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //gradient bar chart
    const canvas:any = (<HTMLCanvasElement>this.Canvas.nativeElement).getContext('2d');
    const gradient = canvas.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, '#285cf7');
    gradient.addColorStop(1, '#f7557a');
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: '# of Votes',
          data: [12, 39, 20, 10, 25, 18],
          backgroundColor: gradient,
          barPercentage: 0.6,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,

        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              max: 80,
              fontColor: "rgba(171, 167, 167,0.9)",
            },
            gridLines: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',
              drawBorder: false
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 11,
              fontColor: "rgba(171, 167, 167,0.9)",
            },
            gridLines: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',
              drawBorder: false
            }
          }]
        }
      }
    });

    //Area Chart
    const ctx:any = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    const areaGradient1 = ctx.createLinearGradient(0, 350, 0, 0);
    areaGradient1.addColorStop(0, 'rgba(247, 85, 122, 0)');
    areaGradient1.addColorStop(1, 'rgba(247, 85, 122, .5)');

    const areaGradient2 = ctx.createLinearGradient(0, 280, 0, 0);
    areaGradient2.addColorStop(0, 'rgba(0, 123, 255, 0)');
    areaGradient2.addColorStop(1, 'rgba(0, 123, 255, .3)');
    const area_chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
          borderColor: '#f7557a',
          borderWidth: 1,
          backgroundColor: areaGradient1
        }, {
          data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
          borderColor: '#007bff',
          borderWidth: 1,
          backgroundColor: areaGradient2
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 10,
              max: 80,
              fontColor: "rgba(171, 167, 167,0.9)",
            },
            gridLines: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',
              drawBorder: false
            },
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 11,
              fontColor: "rgba(171, 167, 167,0.9)",
            },
            gridLines: {
              display: true,
              color: 'rgba(171, 167, 167,0.2)',
              drawBorder: false
            },
          }]
        }
      }
    })

  }

  //Line Chart
  public lineChartOptions = chartData.lineChartOptions
  public lineChartLabels = chartData.lineChartLabels
  public lineChartType = chartData.lineChartType
  public lineChartLegend = chartData.lineChartLegend
  public lineChartData = chartData.lineChartData
  public lineChartColors = chartData.lineChartColors

  //Area Chart
  public AreaChartOptions = chartData.AreaChartOptions;
  public AreaChartLabels = chartData.AreaChartLabels;
  public AreaChartType = chartData.AreaChartType;
  public AreaChartData = chartData.AreaChartData;
  public AreaChartColors = chartData.AreaChartColors;

  //Doughnut and Pie Chart Data
  public PieChartLabels = chartData.PieChartLabels;
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;

  //Bar Chart (Vertical)
  public barChart2Options = chartData.barChart2Options;
  public barChart2Labels = chartData.barChart2Labels;
  public barChart2Type = chartData.barChart2Type;
  public barChart2Legend = chartData.barChart2Legend;
  public barChart2Data = chartData.barChart2Data;
  public barchart2Colors = chartData.barchart2Colors;

  // Bar Chart (Horizantal)
  public barChartOptions = chartData.barChartOptions;
  public barChartLabels = chartData.barChartLabels;
  public barChartType = chartData.barChartType;
  public barChartLegend = chartData.barChartLegend;
  public barChartPlugins = chartData.barChartPlugins;
  public barChartData = chartData.barChartData;
  public barChartColors = chartData.barchart2Colors;

  // Solid Color
  public solidColorOptions = chartData.solidColorChartOptions;
  public solidColorLabels = chartData.solidColorChartLabels;
  public solidColorType = chartData.solidColorChartType;
  public solidColorData = chartData.solidColorChartData;
  public solidColorColors = chartData.solidColorChartColors;
  public solidColorLegend = chartData.solidColorLegend

  //WITH TRANSPARENCY
  public transparentColors = chartData.transparentChartColors;

  // Gradient Color
  public gradientColors = chartData.gradientColorColors;

  // HORIZONTAL BAR CHART
  public horizantalBarOptions = chartData.horizantalBarChartOptions;
  public horizantalBarLabels = chartData.horizantalBarChartLabels;
  public horizantalBarType = chartData.horizantalBarChartType;
  public horizantalBarData = chartData.horizantalBarChartData;
  public horizantalBarColors = chartData.horizantalBarChartColors;
  public horizantalBarLegend = chartData.horizantalBarLegend;



  //HORIZONTAL 2 BAR CHART
  public horizantal2BarOptions = chartData.horizantalBar2ChartOptions;
  public horizantal2BarLabels = chartData.horizantalBar2ChartLabels;
  public horizantal2BarType = chartData.horizantalBar2ChartType;
  public horizantal2BarData = chartData.horizantalBar2ChartData;
  public horizantal2BarColors = chartData.horizantalBar2ChartColors;
  public horizantal2BarLegend = chartData.horizantalBar2Legend;


}
