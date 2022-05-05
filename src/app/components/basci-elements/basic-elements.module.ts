import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { FlexItemsComponent } from './flex-items/flex-items.component';
import { HeightComponent } from './height/height.component';
import { BorderComponent } from './border/border.component';
import { DisplayComponent } from './display/display.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { TypographyComponent } from './typography/typography.component';
import { WidthComponent } from './width/width.component';
import { BasicElementRoutingModule } from './basicelements-routing.module';



@NgModule({
  declarations: [
    ColorsComponent,
    FlexItemsComponent,
    HeightComponent,
    BorderComponent,
    DisplayComponent,
    MarginComponent,
    PaddingComponent,
    TypographyComponent,
    WidthComponent
  ],
  imports: [
    CommonModule,
    BasicElementRoutingModule
  ]
})
export class BasciElementsModule { }
