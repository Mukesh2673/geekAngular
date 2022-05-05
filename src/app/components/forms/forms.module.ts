import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormsRoutingModule } from './forms-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { ColorPickerModule } from 'ngx-color-picker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    FormElementsComponent,
    AdvancedFormsComponent,
    FormWizardComponent,
    FormEditComponent,
    FormElementSizesComponent,
    FormTreeviewComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatTreeModule, MatIconModule, MatProgressBarModule,
    DropzoneModule,
    ColorPickerModule,
    NgxDropzoneModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    NgxDaterangepickerMd.forRoot(),
    AngularMultiSelectModule,
    AngularDualListBoxModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    DragDropModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    ArchwizardModule,
    CKEditorModule,
    AngularEditorModule,
    QuillModule,
    HttpClientModule,
    NgxIntlTelInputModule
  ],
  providers: [
    ToastrService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormElementModule { }
