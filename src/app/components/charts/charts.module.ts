import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { EChartsComponent } from './e-charts/e-charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ChartjsComponent,
    ChartListComponent,
    ApexChartsComponent,
    EChartsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgbModule,
    ChartsModule,
    NgApexchartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    ChartistModule
  ]
})
export class ChartssModule { }
