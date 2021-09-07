import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../services/autentichate.service'
export interface User{
  id?:number,
  name:string,
  surname:string,
  age:string,
  country:string,
  city:string,
  addresses:string[],
  gender:string,
  avatar:string,
  phones:{mobile:string,home:string},
  skills:string[]

}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers:User|any
  form:FormGroup|any
  userName = '';
  password = '';
  loginStatuss = false;
  logo='http://nabu.am/sites/default/files/ACBA_1024.png'
  constructor(private router:Router,private http:HttpClient,private request:AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        username:new FormControl("",Validators.required),
        password:new FormControl(null,[Validators.minLength(6),Validators.required])
      }
    )
    this.request.getUsers().subscribe(user=>{
      this.customers=user
      console.log('Customers',this.customers)
      return this.customers
    })
  }



  login(){
   this.router.navigate(['/user']);
}



}
