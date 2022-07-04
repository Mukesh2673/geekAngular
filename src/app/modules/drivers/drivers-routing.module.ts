import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversListComponent } from '../drivers/drivers-list/drivers-list.component';
import { AddDriversComponent } from './add-drivers/add-drivers.component';
const routes: Routes = [
  {
    path: "",
    children: [
      { path: "add", component: AddDriversComponent, data: { title: 'Admins', breadcrumb: 'Drivers'} },
      { path: "", component: DriversListComponent, data: { title: 'Admins', breadcrumb: 'Drivers' } },
      { path: "edit/:id", component: AddDriversComponent, data: { title: 'Admins', breadcrumb: 'Drivers' } },
      {
        path: '**',
        redirectTo: '/admins'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
