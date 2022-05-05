import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { DragulaCardComponent } from './dragula-card/dragula-card.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { PageSessiontimeoutComponent } from './page-sessiontimeout/page-sessiontimeout.component';
import { NotificationComponent } from './notification/notification.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { CountersComponent } from './counters/counters.component';
import { LoadersComponent } from './loaders/loaders.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { RatingComponent } from './rating/rating.component';
import { AppsRoutingModule } from './apps-routing.module';
import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxNotifierModule } from 'ngx-notifier';
import { CdTimerModule } from 'angular-cd-timer';

@NgModule({
  declarations: [
    CalendarComponent,
    DragulaCardComponent,
    ImageCropComponent,
    PageSessiontimeoutComponent,
    NotificationComponent,
    SweetAlertsComponent,
    RangeSliderComponent,
    CountersComponent,
    LoadersComponent,
    TimeLineComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DragulaModule.forRoot(),
    FormsModule, ReactiveFormsModule,
    NgxSliderModule,
    SweetAlert2Module,
    NgxNotifierModule ,
    ImageCropperModule,
    CdTimerModule
  ]
})
export class AppsModule { }
