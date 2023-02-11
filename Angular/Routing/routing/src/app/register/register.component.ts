import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private user:UserService) { }
  form:FormGroup | any;


  ngOnInit(): void {
    this.form = new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
      login:new FormControl('',[Validators.required]),
      password:new FormControl(null,[Validators.minLength(6),Validators.required])
    });

  }

  onSubmit(){
    const formData = {...this.form.value}
    console.log(formData)
    if(formData.username && formData.password && formData.login){
      this.user.users.push(formData)
      this.router.navigate(['/posts']);
    }

    console.log(this.user.users)

  }

}
