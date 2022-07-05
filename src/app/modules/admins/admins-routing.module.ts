import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from 'src/app/shared/routes/authorization.guard';
import { AddAdminsComponent } from './add-admins/add-admins.component';
import { AdminsListComponent } from './admins-list/admins-list.component';
const routes: Routes = [
  {
    path: "", 
     canActivateChild: [AuthorizationGuard],
        children: [
      { path: "add", component: AddAdminsComponent, data:  { title: 'Admins', breadcrumb: 'Admin' }},
      { path: "", component: AdminsListComponent, data: { title: 'Admins', breadcrumb: 'Admin' } },
      { path: "edit/:id", component: AddAdminsComponent, data: { title: 'Admins', breadcrumb: 'Admin' } },
      
    ],
  },










];






@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
