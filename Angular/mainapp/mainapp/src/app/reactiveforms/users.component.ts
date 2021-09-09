import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormArray} from "@angular/forms";
import {DataService} from "../serviec/data.service"
export class User{
  userName:string|any;
  userAge:number|any;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[DataService]
})
export class UsersComponent implements OnInit {
  user:User[] = [];
  form:FormGroup|any
  constructor() { }
  ngOnInit(): void {
   this.form = new FormGroup({
     email:new FormControl('',[Validators.email,Validators.required]),
     password: new FormControl(null, [Validators.minLength(6),Validators.required]),
     address:new FormGroup({
       country:new FormControl('am'),
       city:new FormControl('Yerevan',Validators.required)
     }),
     skills:new FormArray([])
   });

  }
  submit(){
    if(this.form.valid){
      console.log('Form ', this.form)
      const formData = { ...this.form.value }
      console.log('Form', formData)
    }

  }
  addCity(){
    const cityMap:any={
      ru:'Moscow',
      am:'Yerevan',
      us:'Washington'
    }
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey]
    this.form.patchValue({
      address:{city:city}
    })
  }
  addSkills(){
    const control = new FormControl('',Validators.required);
    //(<FormArray>this.form.get('skills').push))
    (this.form.get('skills') as FormArray).push(control)
  }
}


