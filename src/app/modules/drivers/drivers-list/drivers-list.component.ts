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
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
) { }

  ngOnInit(): void {
    this.driversData();
  }
   //get driver Data
   driversData() {
    this.apiService.getData('drivers/getDriversdata').subscribe(
      (result: any) => {
        this.driversLists = result;
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
        this.driversData();
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
