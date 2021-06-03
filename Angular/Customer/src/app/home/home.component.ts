import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form:FormGroup|any
  logo='http://nabu.am/sites/default/files/ACBA_1024.png'
  constructor(private router:Router) { }

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
    this.router.navigate(['/user'])
    console.log(formData)
  }

}
