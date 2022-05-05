import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDComponent } from './crud/crud.component';
import { FirebaseRoutingModule } from './firebase-routing.module';

import { RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    CRUDComponent,
    AddMemberComponent,
    EditMemberComponent,
    MemberListComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FirebaseRoutingModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    FormsModule,
    SweetAlert2Module,
    ReactiveFormsModule
  ],
  providers:[
    ToastrService
  ]
})
export class FirebaseModule { }
