import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  hasError: boolean = false;
  public forgotPasswordForm! : FormGroup;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
    private titleService: Title
  ) { }

  get form(){
    return this.forgotPasswordForm.controls;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`JOA | Forgot Password`);
    this.forgotPasswordForm = this.formBuilder.group({
      email: [
        //this.defaultAuth.email,
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ]
    }    
    );
  }

  forgotPassword(){
    this.hasError = false;
    const data = {
      email:this.form.email.value
    };
    this.apiService.postData("auth/forgotPassword", data).subscribe(
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
        this.toastr.success("An email with reset password link is sent to you", "Success!");        
        this.router.navigate(['/']);      
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }
}
