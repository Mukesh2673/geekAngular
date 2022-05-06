import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component'

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "change-password", component: ChangePasswordComponent, data: { title: 'Users', breadcrumb: 'User list' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
