import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat01Component } from './chat01/chat01.component';
import { Chat02Component } from './chat02/chat02.component';
import { Chat03Component } from './chat03/chat03.component';
import { ChatRoutingModule } from './chat-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    Chat01Component,
    Chat02Component,
    Chat03Component
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    NgbModule
  ]
})
export class ChatModule { }
