import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { CRUDComponent } from './crud/crud.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'crud',
        component: CRUDComponent,
        children:[
          {
            path:'register-member', component:AddMemberComponent
          },
          {
            path:'view-member', component:MemberListComponent
          },
          {
            path:'edit-member/:id', component:EditMemberComponent
          }
        ]
      },
      {
        path: 'task-list',
        component: TaskComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirebaseRoutingModule { }