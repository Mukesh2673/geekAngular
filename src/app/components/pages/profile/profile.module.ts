import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile01Component } from './profile01/profile01.component';
import { Profile02Component } from './profile02/profile02.component';
import { Profile03Component } from './profile03/profile03.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    Profile01Component,
    Profile02Component,
    Profile03Component
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbModule
  ]
})
export class ProfileModule { }
