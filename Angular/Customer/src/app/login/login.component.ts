import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AuthService } from '../services/autentichate.service';
export interface User{
  id?: number;
  name: string;
  username: string;
  email: string;
  address:{street:string,suite:string,city:string,zipcode:string};
  phone: string;
  company:{name:string,catchPhrase:string,bs:string}

}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  form:FormControl|any
  customers:User|any
  private sub =new SubSink()

  constructor(private router:Router,private request:AuthService,private http:HttpClient,private route:ActivatedRoute) { }

 //Initalise Customers----Initalise Form
  ngOnInit(): void {
    this.getUsers()
    this.form = new FormGroup(
      {
        username:new FormControl('')

      }
    )

  }

getUsers(){
  this.sub.add(this.request.getUsers().subscribe(user=>{
    this.customers=user

  }))
}

//back home route
  backHome(){
    this.router.navigate(['/'])
  }



  //insertUser
  goToInsert(){
    this.router.navigate(['/insert'])
  }

  findUser(){
    this.customers.filter((item:User)=>{
      console.log(item)
      item.name.startsWith(this.form.value)
    })
  }

  removeUser(id:number){
    this.sub.add(
      this.request.removeUsers(id).subscribe(()=>{
        this.getUsers()
      })
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
