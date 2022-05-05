import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../services/api.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  active:any;
  hasError: boolean = false;
  returnUrl: string ='';
  constructor(
    private authservice: AuthService, 
    private router: Router, 
    private formBuilder : FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   username : ['admin@demo.com',[Validators.required, Validators.email]],
    //   password : ['admindemo', Validators.required]
    // });

    this.loginForm = this.formBuilder.group({
      email: [
        //this.defaultAuth.email,
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        //this.defaultAuth.password,
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });

  }

  // firebase
  email = "admin@demo.com";
  password = "admindemo";
  errorMessage = ''; // validation _error handle
  _error: { name: string, message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  login()
  {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
         this.router.navigate(['/dashboard/dashboard01'])
         console.clear()
        }).catch((_error:any)=> {
          this._error = _error
          this.router.navigate(['/'])
        })
    }

    // this.hasError = false;
    // const data = {
    //   email: this.form.email.value,
    //   password: this.form.password.value,
    //   role:'Admin'
    // };
    // this.apiService.postData("auth/login", data).subscribe(
    //   (result: any) => {   
    //     if(result.responseCode===200){
    //       // Handle result
    //       localStorage.setItem("authorization", result.data.token);
    //       localStorage.setItem("checklistUserobject", JSON.stringify(result.data.userDetail));
    //     } 
    //   },
    //   (error) => {
    //     // Handle error
    //     this.hasError = true;      
    //     this.toastr.error(error.error.responseMessage, "Error!");
    //     console.log("error inside");
    //   },
    //   () => {
    //     this.toastr.success("Logged In.", "Success!");        
    //     this.router.navigate(['/dashboard']);       
    //     // 'onCompleted' callback.
    //     // No errors, route to new page here
    //   }
    // );

  }

  validateForm(email:string, password:string) {
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

  }

  //angular
  public loginForm! : FormGroup;
  public error:any = '';
  
  get form(){
    return this.loginForm.controls;
  }
  
  Submit(){
    // this.hasError = false;
    // const data = {
    //   email: this.form.email.value,
    //   password: this.form.password.value,
    //   role:'Admin'
    // };
    // this.apiService.postData("auth/login", data).subscribe(
    //   (result: any) => {   
    //     if(result.responseCode===200){
    //       // Handle result
    //       localStorage.setItem("authorization", result.data.token);
    //       localStorage.setItem("checklistUserobject", JSON.stringify(result.data.userDetail));
    //     } 
    //   },
    //   (error) => {
    //     // Handle error
    //     this.hasError = true;      
    //     this.toastr.error(error.error.responseMessage, "Error!");
    //     console.log("error inside");
    //   },
    //   () => {
    //     this.toastr.success("Logged In.", "Success!");        
    //     this.router.navigate(['/dashboard']);       
    //     // 'onCompleted' callback.
    //     // No errors, route to new page here
    //   }
    // );

    if (this.loginForm.controls['username'].value === "admin@demo.com" && this.loginForm.controls['password'].value === "admindemo" )
    {
      this.router.navigate(['/dashboard/dashboard01']);
    }
    else{
      this.error = "Please check email and passowrd"
    }
  }

}
