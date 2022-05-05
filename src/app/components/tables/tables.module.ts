import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { DefaultTablesComponent } from './default-tables/default-tables.component';
import { TablesRoutingModule } from './tables-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [
    DataTablesComponent,
    DefaultTablesComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgbModule,
    NgxDatatableModule
  ]
})
export class TablesModule { }
