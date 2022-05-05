import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pricing01Component } from './pricing01/pricing01.component';
import { Pricing02Component } from './pricing02/pricing02.component';
import { Pricing03Component } from './pricing03/pricing03.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pricing01',
        component: Pricing01Component
      },
      {
        path: 'pricing02',
        component: Pricing02Component
      },
      {
        path: 'pricing03',
        component: Pricing03Component
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }