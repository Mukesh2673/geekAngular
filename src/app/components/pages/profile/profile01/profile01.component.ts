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
let id=this.userDetails._id
this.apiService.getData(`post/get/${id}`).subscribe(
  (result: any) => {
    this.timeLine=[...result].reverse()
    
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
onFileChange(event){
  console.log(event)
}
share(){
      let post={post:this.sharePost.value.post,
      userName:this.userDetails.firstName+this.userDetails.lastName,
      profile:this.userDetails.profile,
      userId:this.userDetails._id
      }
      this.apiService.postData("post/add", post).subscribe(
     (result: any) => {
      this.timeLine=[...this.timeLine,result.data].reverse()
      this.sharePost.setValue({post:''});
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
deletePost(id){
  console.log('value of timeline is',id)
  this.apiService.deleteData(`post/delete/${id}`).subscribe(
    (result: any) => {
      console.log('delete',result);
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


    