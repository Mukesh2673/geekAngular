import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.scss'],
})
export class AdminsListComponent implements OnInit {
  test!: string;
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.adminData();
  }
  //get Admin Data
  adminData() {
    this.apiService.getData('admins/getAdmindata').subscribe(
      (result: any) => {
        this.test = result;
      },
      (error) => {
        console.log('error inside');
      }
    );
  }
  //delete Admin Data
  deleteAdmin(id: any) {
    this.apiService.deleteData(`admins/deleteAdmin/${id}`).subscribe(
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
        this.adminData();
      }
    );
  }
  //editAdmin data
  editAdmin(id: any) {
    this.apiService.getData(`admins/getAdminData/${id}`).subscribe(
      (result: any) => {
        if (result?.responseCode === 200) {
          console.log('success');
        }
      },
      (error) => {
        console.log('error inside', error);
      },
      () => {
        this.router.navigateByUrl(`/admins/edit/${id}`);
      }
    );
  }
}
