import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile01Component } from './profile01/profile01.component';
import { Profile02Component } from './profile02/profile02.component';
import { Profile03Component } from './profile03/profile03.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile01',
        component: Profile01Component
      },
      {
        path: 'profile02',
        component: Profile02Component
      },
      {
        path: 'profile03',
        component: Profile03Component
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }