import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact01Component } from './contact01/contact01.component';
import { Contact02Component } from './contact02/contact02.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contact01',
        component: Contact01Component
      },
      {
        path: 'contact02',
        component: Contact02Component
      }

    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }