import { HttpClient } from '@angular/common/http';
import { DataService, User } from './../services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  insertForm: FormGroup | any;
  private sub = new SubSink();
  formValue: any
  customers: User[] | any
  addStatuss = ""

  constructor(private http: HttpClient, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.initForm();
    //change


  }

  initForm() {
    this.insertForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl(null, [Validators.required]),
      image: new FormControl(null, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    })
  }

  addUser() {
    const formData = { ...this.insertForm.value,id:+this.insertForm.value.id };
    console.log(formData)
    this.sub.add(this.data.addUsers(formData).subscribe());

  }

  getUsers() {
    this.sub.add(this.data.getUsers().subscribe(user => {
      console.log(user)
      this.customers = user

    }))
  }

  return() {
    this.router.navigate(['/users'])
  }

  close(){
    this.router.navigate(['/users'])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
