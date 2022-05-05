import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CardImagesComponent } from './card-images/card-images.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FootersComponent } from './footers/footers.component';
import { HeadersComponent } from './headers/headers.component';
import { ListComponent } from './list/list.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PanelComponent } from './panel/panel.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { TagsComponent } from './tags/tags.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AccordionComponent,
    AlertsComponent,
    AvatarsComponent,
    BadgesComponent,
    BreadCrumbComponent,
    ButtonsComponent,
    CardsComponent,
    CardImagesComponent,
    CarouselComponent,
    DropdownComponent,
    FootersComponent,
    HeadersComponent,
    ListComponent,
    MediaObjectComponent,
    ModalComponent,
    NavigationComponent,
    PaginationComponent,
    PanelComponent,
    PopoverComponent,
    ProgressComponent,
    TabsComponent,
    TagsComponent,
    TooltipsComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class ElementsModule { }
