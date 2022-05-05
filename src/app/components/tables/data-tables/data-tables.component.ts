import { Component, OnInit } from '@angular/core';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';
import { DataTable } from 'simple-datatables';
@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {

 
  dataTable = SimpleDataTable;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }
}
