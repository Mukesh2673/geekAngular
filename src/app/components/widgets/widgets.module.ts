import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets/widgets.component';
import { ChartWidgetsComponent } from './chart-widgets/chart-widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { GalleryModule } from '@ks89/angular-modal-gallery';  
import 'hammerjs';
import 'mousetrap'


@NgModule({
  declarations: [
    WidgetsComponent,
    ChartWidgetsComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgCircleProgressModule.forRoot(),
    NgApexchartsModule,
    ChartsModule,
    GalleryModule.forRoot()
  ]
})
export class WidgetsModule { }
