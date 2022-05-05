import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog01Component } from './blog01/blog01.component';
import { Blog02Component } from './blog02/blog02.component';
import { Blog03Component } from './blog03/blog03.component';
import { BlogStylesComponent } from './blog-styles/blog-styles.component';
import { BlogRoutingModule } from './blog-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    Blog01Component,
    Blog02Component,
    Blog03Component,
    BlogStylesComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgbModule
  ]
})
export class BlogModule { }
