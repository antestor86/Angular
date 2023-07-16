import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  form:FormGroup;

  constructor(){}
  ngOnInit(): void {
      this.formInit()
  }

  formInit(){
      this.form = new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)])
    })
  }

  submit(){

    console.log(this.form.value)
  }

}
