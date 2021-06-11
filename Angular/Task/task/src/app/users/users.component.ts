import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { DataService, User } from "../services/data.service"

export interface Values {
  name: string,
  city: string,
  country: string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  form: FormGroup | any;
  searchValues: Values | any;
  customers: User[] | any;
  private sub = new SubSink()
  constructor(private router: Router, private http: HttpClient, private data: DataService, route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formInit(),
    this.getUsers()
  }

  formInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.minLength(3)]),
      city: new FormControl("", Validators.minLength(3)),
      country: new FormControl("", Validators.minLength(3))
    })
  }

  getInputs() {
    this.searchValues = { ...this.form.value }
    console.log(this.searchValues)
  }

  getUsers() {
    this.sub.add(this.data.getUsers().subscribe(user => {
      console.log(user)
      this.customers = user

    }))
  }

}
