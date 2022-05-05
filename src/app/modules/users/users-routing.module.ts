import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "list", component: UserListComponent, data: { title: 'Users', breadcrumb: 'User list' } },
      { path: "add", component: AddUserComponent, data: { title: 'Users', breadcrumb: 'User' } },     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
