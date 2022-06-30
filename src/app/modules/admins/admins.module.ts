import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsRoutingModule } from './admins-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { AdminsListComponent } from './admins-list/admins-list.component';



@NgModule({
  declarations: [
    AddAdminsComponent,
    AdminsListComponent,
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminsModule { }
