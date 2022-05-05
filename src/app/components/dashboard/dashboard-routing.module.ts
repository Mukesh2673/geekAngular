import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard01Component } from './dashboard01/dashboard01.component';
import { Dashboard02Component } from './dashboard02/dashboard02.component';
import { Dashboard03Component } from './dashboard03/dashboard03.component';
import { Dashboard04Component } from './dashboard04/dashboard04.component';
import { Dashboard05Component } from './dashboard05/dashboard05.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard01',
        component: Dashboard01Component
      },
      {
        path: 'dashboard02',
        component: Dashboard02Component
      },
      {
        path: 'dashboard03',
        component: Dashboard03Component
      },
      {
        path: 'dashboard04',
        component: Dashboard04Component
      },
      {
        path: 'dashboard05',
        component: Dashboard05Component
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }