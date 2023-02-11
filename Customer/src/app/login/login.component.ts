import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/autentichate.service';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormControl|any
  customers:User|any

  constructor(private router:Router,private request:AuthService,private http:HttpClient,private route:ActivatedRoute) { }
 //Initalise Customers----Initalise Form
  ngOnInit(): void {
    this.form = new FormGroup(
      {
        username:new FormControl('')

      }
    )
      this.request.getUsers().subscribe(user=>{
        this.customers=user
        console.log('Customers',this.customers)
        return this.customers
      })


  }
//back home route
  backHome(){
    this.router.navigate(['/'])
  }


//Search User
  findUser(){
    const formData = {...this.form.value}
    console.log(this.form.value)

  }

}
