import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services/api.service';
import { MustMatch } from '../../shared/validations/passwordValidator';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hasError: boolean = false;
  token:string="";
  public resetPasswordForm! : FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
    private titleService: Title
    ) { }

  get form(){
    return this.resetPasswordForm.controls;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`JOA | Reset Password`);
    if (this.route.snapshot.params.code != undefined) {
      this.token = this.route.snapshot.params["code"]; 
    }
    this.resetPasswordForm = this.formBuilder.group({
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
      ]      
    },
    {
      validator: MustMatch('password','cPassword')
    }
       
    );

  }

  resetPassword(){
    this.hasError = false;
    const data = {
      password: this.form.password.value,
      token: this.token 
    };
    this.apiService.postData("auth/resetPassword", data).subscribe(
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
        this.toastr.success("You password is reset successfully", "Success!");     
        this.router.navigate(['/']);      
        // 'onCompleted' callback.
        // No errors, route to new page here
      }
    );
  }

}
