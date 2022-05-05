import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { Dashboard03Component } from './dashboard03/dashboard03.component';
import { Dashboard02Component } from './dashboard02/dashboard02.component';
import { Dashboard04Component } from './dashboard04/dashboard04.component';
import { Dashboard05Component } from './dashboard05/dashboard05.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { CarouselModule } from 'ngx-owl-carousel-o';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// For Powercharts , Widgets, and Maps
import * as PowerCharts from 'fusioncharts/fusioncharts.vml';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as Maps from 'fusioncharts/fusioncharts.maps';

import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries'; 
 import * as m from 'fusioncharts/fusioncharts.charts'
// Import timeseries
// Pass the fusioncharts library and chart modules
import * as world from 'fusioncharts/maps/fusioncharts.world';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
FusionChartsModule.fcRoot(FusionCharts, Maps, PowerCharts, world);

@NgModule({
  declarations: [
    Dashboard01Component,
    Dashboard03Component,
    Dashboard02Component,
    Dashboard04Component,
    Dashboard05Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    NgApexchartsModule,
    NgCircleProgressModule.forRoot(),
    FusionChartsModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    CarouselModule
  ]
})
export class DashboardModule { }
