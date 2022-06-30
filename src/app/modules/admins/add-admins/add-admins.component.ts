import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-admins',
  templateUrl: './add-admins.component.html',
  styleUrls: ['./add-admins.component.scss']
})
export class AddAdminsComponent implements OnInit {
  updateid!:string
  closeResult='';
  message='';
  errorMessage='';
  adminDetails = {};
  error: {name:string,message:string}={ name: '', message: '' };
  hasError:boolean=false;
  public adminRegisterForm!: FormGroup;  
  public adminUpdateForm!: FormGroup;
  get form(){
       console.log('valueofget form',this.updateid)
      
          return this.adminRegisterForm.controls;
       
       
       

    }
    constructor(
      private router:Router,
      private modalService:NgbModal,
      private formBuilder: FormBuilder,
      private route:ActivatedRoute,
      private apiService:ApiService,
      private toastr:ToastrService,
      private titleService: Title
      ) {}
  

      ngOnInit(): void{
        this.route.params.subscribe(params =>{
          const id = params['id'];
          
          this.updateid=id?id:null;
          this.updateAdmin(id);
           
        })

        this.titleService.setTitle(`JOA | Registration`);
        this.adminUpdateForm=this.formBuilder.group(this.updateid==null? {
          firstName: [
            //this.defaultAuth.email,
             
            Validators.compose([
              Validators.required
            ]),
          ],
          lastName: [
            //this.defaultAuth.email,
            
            Validators.compose([
              Validators.required
            ]),
          ],
          
          email: [
            //this.defaultAuth.email,
            
            Validators.compose([
              Validators.required,
              Validators.email,
              Validators.minLength(3),
              Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
            ]),
          ],


        }:{
          firstName: [
            //this.defaultAuth.email,
             
            Validators.compose([
              Validators.required
            ]),
          ],
          lastName: [
            //this.defaultAuth.email,
            
            Validators.compose([
              Validators.required
            ]),
          ],
          


        }



        
        
        
        
        
        
        
        
        
        )



        this.adminRegisterForm = this.formBuilder.group(
          
          {
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
          
        },
     
        );

       


    
      }
 
      clearErrorMessage() {
        this.errorMessage = '';
        this.error = { name: '', message: '' };
      }
      UpdateAdmindata(){
        console.log('get datas');
      }
      addAdmin(){
        this.hasError = false;
        const data = {
          firstName:this.form.firstName.value,
          lastName:this.form.lastName.value,
          email: this.form.email.value,
          password: this.form.password.value,
          role:['Admin']
        
          
        };
        this.apiService.postData("admins/addAdmin",data).subscribe(
          (result: any) => {   
            if(result.responseCode===200){
              // Handle result
              console.log('okkk');
            } 
          },
          (error)=>{
          this.hasError=true;
          this.toastr.error(error.error.responseMessage,"Error!");
          console.log("error inside");
          },
          ()=>{
            this.toastr.success("Successfully registered.", "Success!");
          }
        );
    
    
    
    
    
    
    
    
        console.log('value of data is ',data)
    
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
         updateAdmin(id:any){
          console.log('id of element is',id)
          this.apiService.getData(`admins/getAdminData/${id}`).subscribe(
            (result: any) => {

                  this.adminUpdateForm.patchValue({
                  firstName: result[0].firstName,
                  lastName: result[0].lastName,
                  email:result[0].email
                 
                });
              console.log(result);
              this.adminDetails = {...result}

              this.form.firstName = result[0].firstName;
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
        
          )
      
      
      
      
      
      
      
      
      
      
      
      
        }
      




      }


