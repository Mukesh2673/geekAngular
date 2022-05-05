import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexChartsComponent } from './apex-charts/apex-charts.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { EChartsComponent } from './e-charts/e-charts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex',
        component: ApexChartsComponent
      },
      {
        path: 'echarts',
        component: EChartsComponent
      },
      {
        path: 'chartjs',
        component: ChartjsComponent
      },
      {
        path: 'chart-list',
        component: ChartListComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }