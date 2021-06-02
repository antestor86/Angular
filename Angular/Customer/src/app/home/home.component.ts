import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form:FormGroup|any
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        username:new FormControl("",Validators.required),
        password:new FormControl(null,[Validators.minLength(6),Validators.required])
      }
    )
  }

  login(){
    const formData = {...this.form.value}
    console.log(formData)
  }

}
