import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';
import { of } from 'rxjs';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
 
 
  constructor(
    private toaster: ToastrService,) { }

  ngOnInit(): void {
  }

  
  public finish() {
    this.toaster.success('Successfully Registered')
  }



   
  isValidTypeBoolean: boolean = true;
 

}
