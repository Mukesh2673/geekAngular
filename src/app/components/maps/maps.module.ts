import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LeafletMapsComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    NgbModule,
    HttpClientModule,
    LeafletModule,
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule { }
