import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AuthService } from '../services/autentichate.service';
export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: { street: string; suite: string; city: string; zipcode: string };
  phone: string;
  company: { name: string; catchPhrase: string; bs: string };
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
      street: new FormControl(),
      suite: new FormControl(),
      zipcode: new FormControl(),
      city: new FormControl(),
      phone: new FormControl(),
      companyName: new FormControl(),
      catchPhrase: new FormControl(),
      bs: new FormControl(),
    });
  }
  //Routing to list
  returnToList() {
    this.router.navigate(['/user']);
  }

  //adding user
  addUser() {
    const formData = { ...this.form.value };
    //console.log(formData)
    this.sub.add(this.http.addUsers(formData).subscribe());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
