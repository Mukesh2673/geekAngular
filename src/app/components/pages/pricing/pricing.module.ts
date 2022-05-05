import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pricing01Component } from './pricing01/pricing01.component';
import { Pricing02Component } from './pricing02/pricing02.component';
import { Pricing03Component } from './pricing03/pricing03.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    Pricing01Component,
    Pricing02Component,
    Pricing03Component
  ],
  imports: [
    CommonModule,
    PricingRoutingModule,
    NgbModule
  ]
})
export class PricingModule { }
