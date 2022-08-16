import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { FILEERRORMESSAGE, FILEEXTENTIONTYPE, FILESIZE, FILESIZEERRORMESSAGE } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public jwt:any = "";
  public BaseUrl = environment.BaseUrl;
  pageSize
  constructor(private http: HttpClient) { 
    this.pageSize = 2;
    this.jwt = localStorage.getItem("authorization");
  }

getUserDetails(){
  if(localStorage.getItem('joaUserobject')){

  let UserDetails:any = localStorage.getItem('joaUserobject')
  return JSON.parse(UserDetails)
  }
  return null;
}
  getToken() {
    let token:any = localStorage.getItem("authorization")? localStorage.getItem("authorization"):"";
    return token;
  }

  swal(message) {
    return Swal.fire({
      icon: 'error',
      confirmButtonColor: '#6993FF',
      text: message,
    })
  }
  fileSizeValidation(size: number) {

    if (size > FILESIZE
    ) {
      return false
    }
    else {
      return true
    }
  }

  typeValidation(name: string) {
    let ext = name.substring(name.lastIndexOf('.') + 1);
    const extType = FILEEXTENTIONTYPE
    let res = extType.includes(ext)
    return res
 }
  
  postData(url: string, data) {
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.getToken(),
      }),
    };

    return this.http.post(this.BaseUrl + url, data, headers);
  }

  postDataMultipart(url: string, data) {
    const headers = {
      headers: new HttpHeaders({
        Authorization:this.getToken(),
      }),
    };

    return this.http.post(url, data);
  }

  putData(url: string, data) {
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.getToken(),
      }),
    };

    return this.http.put<any>(this.BaseUrl + url, data, headers);
  }
  getData(url: string) {
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.getToken(),
      }),
    };
    return this.http.get<any>(this.BaseUrl + url, headers);
  }

  deleteData(url: string) {
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.getToken(),
      }),
    };
    return this.http.delete<any>(this.BaseUrl + url, headers);
  }
}
