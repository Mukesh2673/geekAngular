import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqsComponent } from './faqs/faqs.component';
import { TermsComponent } from './terms/terms.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { SearchComponent } from './search/search.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GalleryModule } from '@ks89/angular-modal-gallery';  
import 'hammerjs';
import 'mousetrap'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EditProfileComponent,
    GalleryComponent,
    FaqsComponent,
    TermsComponent,
    EmptyPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    GalleryModule.forRoot(),
    NgbModule
  ]
})
export class PagesModule { }
