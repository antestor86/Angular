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
  addressForm:FormGroup |any;
  private sub = new SubSink();
  formValue: any
  customers: User[] | any
  addStatuss = false;

  constructor(private http: HttpClient, private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.initForm();
    //change


  }

  initForm() {
    this.insertForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('+', [Validators.required,Validators.minLength(6)]),
      image: new FormControl(null),
      address:new FormGroup({
        street: new FormControl(''),
        city: new FormControl('')
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  addUser() {
    if(this.insertForm.valid){
      const formData = { ...this.insertForm.value};
      console.log("the form values",formData)
      this.addStatuss = true;
      this.sub.add(this.data.addUsers(formData).subscribe());
    }
    else{
      this.addStatuss=false;
    }
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
