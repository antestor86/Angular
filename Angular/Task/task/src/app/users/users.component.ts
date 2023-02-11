import { User } from './../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubSink } from 'subsink';
import { DataService } from '../services/data.service';


export interface Values {
  name: string;
  city: string;
  country: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  form: FormGroup | any;
  insertForm: FormGroup | any;
  searchValues: Values | any;
  customers: User[] | any;
  searchStatuss = false;
  findedUsers: User[] = [];
  insertStatuss = false;
  user: User | any;
  totalLength:any;
  page:number = 1;
  length:number;
  private sub = new SubSink();



  constructor(
    private router: Router,
    private http: HttpClient,
    private data: DataService,
    route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.formInit();
    this.getUsers();
    this.formInit();
    //this.totalLength = this.customers.length
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

  formInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)]),
      city: new FormControl('', Validators.minLength(3)),
      street: new FormControl('', Validators.minLength(3)),
    });
  }

  getInputs() {
    const error = "Nothong to add"
    const formValue = { ...this.form.value };
    const range = formValue.name as string;
    const city = formValue.city as string;
    const street = formValue.street as string;
    const id = formValue.id as number;

    this.findedUsers = this.customers.filter((item: User) => {
      return (
        item.name.toLowerCase().includes(range.toLowerCase()) &&
        item.address.city.toLowerCase().includes(city.toLowerCase()) &&
        item.address.street.toLowerCase().includes(street.toLowerCase())
      );
    });

    this.searchStatuss = true;
  }

  getUsers() {
    this.sub.add(
      this.data.getUsers().subscribe((user) => {
        console.log(user);
        this.customers = user;
        this.length = this.customers.length
        console.log("Length is",this.length)
      })
    );
  }

  logOut() {
    this.router.navigate(['/']);
  }

  insert() {

    this.router.navigate(['/insert'])
  }

  removeUser(id: number) {
    this.sub.add(
      this.data.removeUsers(id).subscribe(() => {
        this.getUsers();
      })
    );
  }

  addUser() {
    const formData = { ...this.insertForm.value };
    console.log(formData)
    this.sub.add(this.data.addUsers(formData).subscribe());
  }

  addUsers() {
    const formData = { ...this.insertForm.value };
    console.log(formData)
    this.sub.add(this.data.addUsers(formData).subscribe());
  }

  getUser() {
    this.sub.add(this.data.getUsers().subscribe(user => {
      console.log(user)
      this.customers = user
    }))
  }


  openPage() {
    this.router.navigate([`/users/${this.customers.id}`])
  }



  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
