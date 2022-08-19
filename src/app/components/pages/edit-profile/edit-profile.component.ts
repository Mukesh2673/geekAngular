
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../../services/api.service';
/* import { MustMatch } from '../../shared/validations/passwordValidator'; */
import { MustMatch } from '../../../shared/validations/passwordValidator';
import { Title } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public userDetails:any
  profile:any
  closeResult = '';
  message = '';
  errorMessage = ''; // validation error handle
  Baseurl=environment.BaseUrl;
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  hasError: boolean = false;
  public registerForm! : FormGroup;
  public countries:Array<String>=[]
  get form(){
    return this.registerForm.controls;
  }
 
  
  constructor(
    private authservice: AuthService,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
    private titleService: Title,
    private http:HttpClient
  ) {
    this.userDetails=apiService.getUserDetails();
    this.profile=this.userDetails.profile;
    this.countries=['Germany','Real Estate','Canada','Usa','Afghanistan','Albania','China','Denmark','Finland','India','Kiribati','Mexico','Pakistan']
   }

  ngOnInit(): void {
    this.titleService.setTitle(`JOA | Registration`);

    this.registerForm = this.formBuilder.group({
      firstName: [
        //this.defaultAuth.email,
        this.userDetails.firstName,
        Validators.compose([
          Validators.required
        ]),
      ],
      lastName: [
        //this.defaultAuth.email,
        this.userDetails.lastName,
        Validators.compose([
          Validators.required
        ]),
      ],
      email: [
        //this.defaultAuth.email,
      this.userDetails.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      phone: [
        //this.defaultAuth.email,
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      address: [
        //this.defaultAuth.email,
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      city: [
        //this.defaultAuth.email,
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      postalCode:[
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      countryName:[
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      facebook:[
        '',
        Validators.compose([
         
        ]),
      ],
      Bio:[
        '',
        Validators.compose([
         
        ]),
      ],
      google:[
        '',
        Validators.compose([
        
        ]),
      ],
      
      twitter:[
        '',
        Validators.compose([
  
        ]),
      ], 
      profile:[
        '',
        Validators.compose([
  
        ]),
      ], 
      
      pinterest:[
        '',
        Validators.compose([
         
        ]),
      ],
      about:[
        '',
        Validators.compose([
     
        ]),
      ],

      
    
   
    },
 
    );

  this.getUserData();
  }


  getUserData()
  {
   let user=this.apiService.getUserDetails(); 
   this.apiService.getData(`users/detail/${user._id}`).subscribe(
      (result: any) => {   
        console.log(result);
        if(result.responseCode===200){
          // Handle result
          
        } 
      },
      (error) => {
        // Handle error
        this.hasError = true;      
        this.toastr.error(error.error.responseMessage, "Error!");
        console.log("error inside");
      }

    );



  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  register() {
       let userProfile={
        firstName:this.form.firstName.value,
        lastName:this.form.lastName.value,
        email:this.form.email.value,
        bio:this.form.Bio.value,
        phone:this.form.phone.value,
        address:this.form.address.value,
        about:this.form.about.value,
        city:this.form.city.value,
        postalCode:this.form.postalCode.value,
        Google:this.form.google.value,
        Pinterest:this.form.pinterest.value,
        Twitter:this.form.twitter.value,
        country:this.form.countryName.value,
        _id:this.userDetails._id       
       }
    
       this.apiService.postData("auth/update", userProfile).subscribe(
        (result: any) => {   
          localStorage.setItem("joaUserobject", JSON.stringify(result));

          //if(result.responseCode===200){
            // Handle result
            
           
        },
        (error) => {
          // Handle error
          this.hasError = true;      
          this.toastr.error(error.error.responseMessage, "Error!");
          console.log("error inside");
        },
        () => {
          this.toastr.success("Successfully registered.", "Success!");
          //this.router.navigate(['/auth/login']);    
          // 'onCompleted' callback.
          // No errors, route to new page here
        }
      );






      
    
    
    
    
    
    
    
    
    // this.clearErrorMessage();
    // if (this.validateForm(this.email, this.password)) {
    //   this.authservice.registerWithEmail(this.email, this.password)
    //     .then(() => {
    //       this.message = "you are register with data on firbase"
    //       this.router.navigate(['/dashboard/dashboard01'])
    //     }).catch((_error: any) => {
    //       this.error = _error
    //       this.router.navigate(['/auth/register'])
    //     })
    // }

 /*    this.hasError = false;
    const data = {
      firstName:this.form.firstName.value,
      lastName:this.form.lastName.value,
      email: this.form.email.value,
      password: this.form.password.value,
      //role:'Admin'
    };






    this.apiService.postData("auth/register", data).subscribe(
      (result: any) => {   
        if(result.responseCode===200){
          // Handle result
          
        } 
      },
      (error) => {
        // Handle error
        this.hasError = true;      
        this.toastr.error(error.error.responseMessage, "Error!");
        console.log("error inside");
      },
      () => {
        this.toastr.success("Successfully registered.", "Success!");
        this.router.navigate(['/auth/login']);    
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );

  }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;
 */
  }

  UserModal(userForm: any) {
    this.modalService.open(userForm, { scrollable: true, size: 'lg' });
  }

  open(content) {
    this.modalService.open(content, { scrollable: true, size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      alert("yes")
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      alert("no")
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onFileChange(event:any){
 
    var image = <File>event.target.files[0]
    const  fd= new FormData();
    fd.append('profileImage',image,image.name);
    this.apiService.postDataMultipart("users/profile",fd).subscribe(
      (result: any) => {
         
        this.profile=result.doc.profile
        console.log(result.doc);
        localStorage.setItem("joaUserobject", JSON.stringify(result.doc)); 
        if(result.responseCode===200){
          // Handle result
          
        } 
      },
      (error) => {
        // Handle error
        this.hasError = true;      
        this.toastr.error(error.error.responseMessage, "Error!");
        console.log("error inside");
      },
      () => {
        this.toastr.success("Successfully registered.", "Success!");
        //this.router.navigate(['/auth/login']);    
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );








  }

}