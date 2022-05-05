import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Filemanager01Component } from './filemanager01/filemanager01.component';
import { Filemanager02Component } from './filemanager02/filemanager02.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'filemanager01',
        component: Filemanager01Component
      },
      {
        path: 'filemanager02',
        component: Filemanager02Component
      }
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilemanagerRoutingModule { }