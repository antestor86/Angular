import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../services/autentichate.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  form:FormGroup
  formData:User
  customers:User[]
  constructor(private http:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl('',[Validators.required]),
      username:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      street:new FormControl('',Validators.required),
      suite:new FormControl(''),
      zipcode:new FormControl(''),
      city:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      companyName:new FormControl(''),
      catchPhrase:new FormControl(''),
      bs:new FormControl('')
    })
    this.http.getUsers().subscribe(user=>{
      this.customers=user
    })
  }
  addUser(){
    console.log('Form',this.form.value)
    this.formData={...this.form.value}
    this.http.addUsers(this.formData).subscribe(user=>{
      console.log('user',user)
      return this.customers.push(user)

    })
    this.router.navigate(['/user'])
  }


}
