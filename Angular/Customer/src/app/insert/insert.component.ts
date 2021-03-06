import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AuthService } from '../services/autentichate.service';
export interface User {

  name: string;
  username: string;
  email: string;
  street:string|any;
  address: { street: string; suite: string; city: string; zipcode: string };
  phone: string;
  company: { name: string; catchPhrase: string; bs: string };
  id?: number;
}
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
})
export class InsertComponent implements OnInit, OnDestroy {
  private sub = new SubSink();
  form: FormGroup;

  constructor(private http: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      street: new FormControl('',Validators.required),
      suite: new FormControl(null),
      zipcode: new FormControl(null),
      city: new FormControl(null),
      companyName: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl(''),
    });
  }
  //Routing to list
  returnToList() {
    this.router.navigate(['/user']);
  }

  //adding user
  addUser() {
    const formData = { ...this.form.value };
    formData.id = parseInt(formData.id+1);
    //console.log(formData)
    this.sub.add(this.http.addUsers(formData).subscribe());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
