import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService, User } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  customers: User[] | any;
  form: FormGroup | any;
  formValue: any;
  loginStatuss = false;
  passwordStatuss = false;
  logo = 'http://nabu.am/sites/default/files/ACBA_1024.png';
  errors = {invalidUser:"incorrect username",invalidPassword:"incorrect password"}

  constructor(
    private http: HttpClient,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }

  login() {
    this.formValue = { ...this.form.value };
    console.log(this.formValue);
    if (
      this.formValue.username == this.data.administrator.admin.login &&
      this.formValue.password == this.data.administrator.admin.password) {
      this.router.navigate(['users'])
    }
    else{
      this.passwordStatuss = true;
    }
  }
}
