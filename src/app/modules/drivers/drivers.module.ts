import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AddDriversComponent,
    DriversListComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ]
})
export class DriversModule { }
