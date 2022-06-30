import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.scss']
})
export class AdminsListComponent implements OnInit {
  test!:string
  constructor(private apiService:ApiService,
    private toastr:ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.adminData();
  }



adminData(){
  this.apiService.getData("admins/getAdmindata").subscribe(
    (result: any) => {   
     this.test = result       
        console.log('okkk',result);
     
    },
    (error)=>{
    //this.hasError=true;
    //this.toastr.error(error.error.responseMessage,"Error!");
    console.log("error inside");
    })
  }
  deleteAdmin(id:any){
    this.apiService.deleteData(`admins/deleteAdmin/${id}`).subscribe(
      (result: any) => {   
        if(result.responseCode===200){
          // Handle result
          console.log('success')
        } 
      },
      (error)=>{
      //this.hasError=true;
      //this.toastr.error(error.error.responseMessage,"Error!");
      console.log("error inside",error);
      },
       ()=>{
        this.toastr.success("Successfully Deleted.", "Success!");
        this.adminData();
      } 

    )
  }
  updateAdmin(id:any){
    console.log('id of element is',id)
    this.apiService.getData(`admins/getAdminData/${id}`).subscribe(
      (result: any) => {
        console.log('data to updata',result)   
        if(result.responseCode===200){
          // Handle result
          console.log('success')
        } 
      },
      (error)=>{
      //this.hasError=true;
      //this.toastr.error(error.error.responseMessage,"Error!");
      console.log("error inside",error);
      },
       ()=>{
          //this.toastr.success("Successfully updated", "Success!");
        //this.adminData();
        this.router.navigateByUrl(`/admins/edit/${id}`);
      } 

    )












  }








}
