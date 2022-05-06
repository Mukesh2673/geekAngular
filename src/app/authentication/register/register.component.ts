import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../../services/api.service';
import { MustMatch } from '../../shared/validations/passwordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //email = "";
  //password = "";
  //cPassword="";
  //firstName = "";
  //lastName = "";
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle
  hasError: boolean = false;
  public registerForm! : FormGroup;

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
  ) { }

  
  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: [
        //this.defaultAuth.email,
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
      lastName: [
        //this.defaultAuth.email,
        '',
        Validators.compose([
          Validators.required
        ]),
      ],
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
      cPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      agree: [false, Validators.compose([Validators.required])],
    },
    {
      validator: MustMatch('password','cPassword'),
      //validator: ConfirmPasswordValidator.MatchPassword,
    }
    );

  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  register() {
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

    this.hasError = false;
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

  }

  UserModal(userForm: any) {
    this.modalService.open(userForm, { scrollable: true, size: 'lg' });
  }

}