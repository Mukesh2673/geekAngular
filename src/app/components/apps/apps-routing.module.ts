import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CountersComponent } from './counters/counters.component';
import { DragulaCardComponent } from './dragula-card/dragula-card.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { LoadersComponent } from './loaders/loaders.component';
import { NotificationComponent } from './notification/notification.component';
import { PageSessiontimeoutComponent } from './page-sessiontimeout/page-sessiontimeout.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { RatingComponent } from './rating/rating.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { TimeLineComponent } from './time-line/time-line.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'counters',
        component: CountersComponent
      },
      {
        path: 'dragula-card',
        component: DragulaCardComponent
      },
      {
        path: 'page-sessiontimeout',
        component: PageSessiontimeoutComponent
      },
      {
        path: 'image-crop',
        component: ImageCropComponent
      },
      {
        path: 'loaders',
        component: LoadersComponent
      },
      {
        path: 'notifications',
        component: NotificationComponent
      },
      {
        path: 'range-slider',
        component: RangeSliderComponent
      },
      {
        path: 'sweet-alerts',
        component: SweetAlertsComponent
      },
      {
        path: 'rating',
        component: RatingComponent
      },
      {
        path: 'time-line',
        component: TimeLineComponent
      },

    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }