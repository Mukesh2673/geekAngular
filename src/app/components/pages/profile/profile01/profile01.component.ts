import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-profile01',
  templateUrl: './profile01.component.html',
  styleUrls: ['./profile01.component.scss']
})





export class Profile01Component implements OnInit {
public userDetails:any
  constructor(private apiService: ApiService) {
     this.userDetails=apiService.getUserDetails()
  
    }

  ngOnInit(): void {
  console.log(this.userDetails)
  }

}
