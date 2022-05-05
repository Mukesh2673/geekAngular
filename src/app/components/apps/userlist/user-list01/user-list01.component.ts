import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-user-list01',
  templateUrl: './user-list01.component.html',
  styleUrls: ['./user-list01.component.scss']
})
export class UserList01Component implements OnInit {
  dataTable = SimpleDataTable;
  constructor(
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }
  // UserModal(userForm:any){
  //   this.modalService.open(userForm,{ scrollable: true,size: 'lg' });
  // }
}
