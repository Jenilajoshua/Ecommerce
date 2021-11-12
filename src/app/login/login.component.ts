import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {




  profile=new FormGroup({
    email_in:new FormControl('',Validators.required),
    pass_in:new FormControl('',Validators.required)
  })
  postId: any;
  errorMessage: any;

  constructor(private _router: Router,private http:HttpClient) {
    
   }

  ngOnInit(): void {

  }
  user_email!: any;
  user_pass!: string;
onSubmit(){
  this.user_email=this.profile.value.email_in;
  this.user_pass=this.profile.value.pass_in;
 if((this.user_email=="admin")&&(this.user_pass=="admin")){

  localStorage.setItem('userdetails',this.user_email);

  this._router.navigate(['/products'], {queryParams: {user: this.user_email}} )

  this.http.post<any>('https://fakestoreapi.com/products', { title: 'Angular POST Request Example' }).subscribe({
    next: data => {
        this.postId = data;
        this.postId.statuscode=200
       
        localStorage.setItem('userapi',JSON.stringify(this.postId));
     
    
       
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
})

 }else{
   window.alert("Username or password invalid")
 }
}
}
