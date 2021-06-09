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
  street:string|any;
  address:{street:string|any,suite:string,city:string,zipcode:string};
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
  checkStatuss=false;
  findedUsers = [];
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

//search function
  findUser(){
    const formValue = {...this.form.value}
    const range = formValue.username;
    this.customers.filter(item=>{
      if(item.username.includes(range.substring(0,3))){
        console.log(item)
        this.findedUsers.push(item)
        this.checkStatuss = true;
      }

      console.log(this.checkStatuss)

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
