import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsRoutingModule } from './admins-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AddAdminsComponent,
    AdminsListComponent,
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    JwtModule.forRoot({})
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
]
})
export class AdminsModule { }
