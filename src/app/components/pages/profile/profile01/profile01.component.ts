import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile01',
  templateUrl: './profile01.component.html',
  styleUrls: ['./profile01.component.scss']
})

export class Profile01Component implements OnInit {
public userDetails:any
public timeLine:any
public sharePost! : FormGroup;
get form(){
  return this.sharePost.controls;
}
  constructor(private apiService: ApiService,
    private formBuilder: FormBuilder) {
     this.userDetails=apiService.getUserDetails()
    }
  ngOnInit(): void {
  console.log(this.userDetails)

  this.sharePost = this.formBuilder.group({
    post: [
      '',
      Validators.compose([
        Validators.required
      ]),
    ]})
    this.getPost();

    
}
getPost(){
console.log('getPostdata')
let id=this.userDetails._id
this.apiService.getData(`post/get/${id}`).subscribe(
  (result: any) => {
    this.timeLine=[...result]
    console.log(result)
    console.log('value of timeline',this.timeLine);
    //localStorage.setItem("joaUserobject", JSON.stringify(result));

    //if(result.responseCode===200){
      // Handle result
      
     
  },
  (error) => {
    // Handle error
  
    console.log("error",error);
  },

);

}
share(){
      let post={post:this.sharePost.value.post,
      userName:this.userDetails.firstName+this.userDetails.lastName,
      profile:this.userDetails.profile,
      userId:this.userDetails._id
      }
      this.apiService.postData("post/add", post).subscribe(
     (result: any) => {
      this.timeLine=[...this.timeLine,result]
     this.sharePost.setValue({post:''});
      console.log(result);
      
      
       //localStorage.setItem("joaUserobject", JSON.stringify(result));

       //if(result.responseCode===200){
         // Handle result
         
        
     },
     (error) => {
       // Handle error
     
       console.log("error",error);
     },

   );
}


}


    