import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { ChangePasswordComponent } from '../../profile/change-password/change-password.component';
@Component({
  selector: 'app-add-drivers',
  templateUrl: './add-drivers.component.html',
  styleUrls: ['./add-drivers.component.scss']
})
export class AddDriversComponent implements OnInit {
  updateid!: string;
  closeResult = '';
  message = '';
  errorMessage = '';
  driverDetails = {};
  error: { name: string; message: string } = { name: '', message: '' };
  hasError: boolean = false;
  public driverRegisterForm!: FormGroup;
  public driverUpdateForm!: FormGroup;
  get form() {
    return this.driverRegisterForm.controls;
  }
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private toastr: ToastrService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.updateid = id ? id : null;
      if(id)
      {
      this.updateDriver(id);
      }
    });
    this.titleService.setTitle(`JOA | Registration`);
    this.driverRegisterForm = this.formBuilder.group(
      this.updateid == null
        ? {
            firstName: [
              //this.defaultAuth.email,
              '',
              Validators.compose([Validators.required]),
            ],
            lastName: [
              //this.defaultAuth.email,
              '',
              Validators.compose([Validators.required]),
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
          }
        : {
            firstName: [
              //this.defaultAuth.email,
              '',
              Validators.compose([Validators.required]),
            ],
            lastName: [
              //this.defaultAuth.email,
               '', 
              Validators.compose([Validators.required]),
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
          }
    );
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }
  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }
    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }
    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }
    this.errorMessage = '';
    return true;
  }



  addDriver()
  {
    
      this.hasError = false;
      const data = {
        firstName: this.form.firstName.value,
        lastName: this.form.lastName.value,
        email: this.form.email.value,
        password: this.form.password.value,
        role: ['Driver'],
      };0
      console.log(data);
       this.apiService.postData('admins/addAdmin', data).subscribe(
        (result: any) => {
          if (result.responseCode === 200) {
            // Handle result
            this.toastr.success('Successfully registered.', 'Success!');
          }
        },
        (error) => {
          this.hasError = true;
          this.toastr.error(error.error.responseMessage, 'Error!');
          console.log('error inside');
        },
        () => {
  
          this.router.navigateByUrl('/drivers');
        }
      ); 
      
    


























    
  }
  updateDriverdata()
  {
      const data = {
        firstName: this.form.firstName.value,
        lastName: this.form.lastName.value,
        email: this.form.email.value,
        id: this.updateid,
      };
      this.apiService.putData('drivers/patchDriver', data).subscribe(
        (result: any) => {
          if (result?.responseCode === 200) {
            // Handle result
            console.log('okkk', result);
          }
        },
        (error) => {
          this.hasError = true;
          this.toastr.error(error.error.responseMessage, 'Error!');
          console.log('error',error);
        },
        () => {
          this.toastr.success('Successfully updated.', 'Success!');
          this.router.navigateByUrl('/drivers');
        }
      );
    


    console.log('upadate driver data');
  
  
  
  
  
  
  
  
  
  
  
  }

    updateDriver(id: any) {
      this.apiService.getData(`drivers/getDriverData/${id}`).subscribe(
        (result: any) => {
          this.driverRegisterForm.patchValue({
            firstName: result[0].firstName,
            lastName: result[0].lastName,
            email: result[0].email,
          });
          this.driverDetails = { ...result };
          if (result.responseCode === 200) {
            // Handle result
            console.log('success');
          }
        },
        (error) => {
          //this.hasError=true;
          //this.toastr.error(error.error.responseMessage,"Error!");
          console.log('error inside', error);
        }
      );
    }















  
}
