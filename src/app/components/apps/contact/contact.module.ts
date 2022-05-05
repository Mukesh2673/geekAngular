import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact01Component } from './contact01/contact01.component';
import { Contact02Component } from './contact02/contact02.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [
    Contact01Component,
    Contact02Component
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
