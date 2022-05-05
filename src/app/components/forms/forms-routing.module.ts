import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'advanced-forms',
        component: AdvancedFormsComponent
      },
      {
        path: 'form-elements',
        component: FormElementsComponent
      },
      {
        path: 'form-element-sizes',
        component: FormElementSizesComponent
      },
      {
        path: 'form-edit',
        component: FormEditComponent
      },
      {
        path: 'form-treeview',
        component: FormTreeviewComponent
      },
      {
        path: 'form-wizard',
        component: FormWizardComponent
      },
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }