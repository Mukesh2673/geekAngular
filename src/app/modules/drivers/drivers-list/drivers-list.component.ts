import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  driversLists:any=[];
  page: number = 1;
  count: number = 1;
  tableSize: number=5
  pageSize:number = 5
  totalItems:any=5
  tableSizes: any = [3, 6, 9, 12]
  selectedAdminsData:any = '';

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
) { }

  ngOnInit(): void {
    this.driversData(1);
  }
  
  //get driver data on select to option  value
  onSelected(value:string): void {
		this.selectedAdminsData= value;
    this.pageSize = parseInt(value);
    this.tableSize= parseInt(value);
    this.driversData(1);
	}

   //get driver Data
   driversData(event){
    this.page=event;
    let skip  = this.pageSize *(event -1)
    this.apiService.getData(`drivers/getDriversdata?skip=${skip}&limit=${this.pageSize}`).subscribe(
      (result: any) => {
        this.driversLists = result.item;
        this.count=result.totals 
      },
      (error) => {
        console.log('error inside',error);
      }
    );
  }

  //delete Driver Data
  deleteDriver(id: any) {
    this.apiService.deleteData(`drivers/deleteDriver/${id}`).subscribe(
      (result: any) => {
        if (result?.responseCode === 200) {
          console.log('success');
        }
      },
      (error) => {
        console.log('error inside', error);
      },
      () => {
        this.toastr.success('Successfully Deleted.', 'Success!');
        this.driversData(event);
      }
    );
  }

   //editDriver data
   editDriver(id: any) {
    this.apiService.getData(`drivers/getDriverData/${id}`).subscribe(
      (result: any) => {
        if (result?.responseCode === 200) {
          console.log('success');
        }
      },
      (error) => {
        console.log('error inside', error);
      },
      () => {
        this.router.navigateByUrl(`/drivers/edit/${id}`);
      }
    );
  }






}
