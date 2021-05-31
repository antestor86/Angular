import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup|any
  statuss = false
   message = 'Try Again'
  constructor(private user:UserService,private route:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl([null])
    })
  }

  onSubmit(){
    const value = {...this.form.value}
    console.log(this.form.value)
    if(this.user.users.filter((user)=>{
      user==value}
      )){
        this.route.navigate(['/'])
        this.statuss = true
        console.log(this.user)
      }
      else{
        this.route.navigate(['/login'])
      }

    }

  }
