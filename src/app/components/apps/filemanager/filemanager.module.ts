import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filemanager01Component } from './filemanager01/filemanager01.component';
import { Filemanager02Component } from './filemanager02/filemanager02.component';
import { FilemanagerRoutingModule } from './filemanager-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    Filemanager01Component,
    Filemanager02Component
  ],
  imports: [
    CommonModule,
    FilemanagerRoutingModule,
    NgCircleProgressModule.forRoot(),
    NgbModule
  ]
})
export class FilemanagerModule { }
