import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatherIconsComponent } from './feather-icons/feather-icons.component';
import { FlagIconsComponent } from './flag-icons/flag-icons.component';
import { FontAwsomeComponent } from './font-awsome/font-awsome.component';
import { IonicIconsComponent } from './ionic-icons/ionic-icons.component';
import { MaterialDesignIconsComponent } from './material-design-icons/material-design-icons.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';
import { Pe7IconsComponent } from './pe7-icons/pe7-icons.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';
import { ThemifyIconsComponent } from './themify-icons/themify-icons.component';
import { TypiconsIconsComponent } from './typicons-icons/typicons-icons.component';
import { WeatherIconsComponent } from './weather-icons/weather-icons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'feather',
        component: FeatherIconsComponent
      },
      {
        path: 'flag',
        component: FlagIconsComponent
      },
      {
        path: 'font-awesome',
        component: FontAwsomeComponent
      },
      {
        path: 'ionic',
        component: IonicIconsComponent
      },
      {
        path: 'material-design',
        component: MaterialDesignIconsComponent
      },
      {
        path: 'material',
        component: MaterialIconsComponent
      },
      {
        path: 'pe7',
        component: Pe7IconsComponent
      },
      {
        path: 'simple-line',
        component: SimpleLineIconsComponent
      },
      {
        path: 'themify',
        component: ThemifyIconsComponent
      },
      {
        path: 'typicons',
        component: TypiconsIconsComponent
      },
      {
        path: 'weather',
        component: WeatherIconsComponent
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }