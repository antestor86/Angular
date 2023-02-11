import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../Services/auth.service";
import {User} from "../Models/user.model";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  logo:string = "../assets/logo.png";
  signUpForm :FormGroup|any;
  users:User[]|undefined;

  constructor(private data:AuthService,public user:User) { }

  ngOnInit(): void {
    this.formInit();
    this.getUsers();


  }

  formInit(){
    this.signUpForm = new FormGroup({
      username : new FormControl(null,[Validators.required,Validators.minLength(6)]),
      login:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)])
    })
  }

  signUp(){
    if(this.signUpForm.valid){
      const formValue = {...this.signUpForm.value}
      this.data.addUser(formValue).subscribe((data:any)=>{
        console.log(data)

      })
    }
  }

  getUsers(){
    this.data.getUsers().subscribe((items:any)=>{
      this.users = items;
      console.log(items)
    })
  }

}
