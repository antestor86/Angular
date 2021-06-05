import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
export interface User{

  id?:number,
  name:string,
  surname:string,
  age:string,
  country:string,
  city:string,
  addresses:string[],
  gender:string,
  avatar:string,
  phones:{mobile:string,home:string},
  skills:string[]

}
@Injectable({providedIn:'root'})
export class AuthService implements OnInit{
  customers:User[]|any
  users=[
    {username:'admin',password:'aa123456'},
    {username:'acba',password:'acba123*'},
]
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.http.get<User>('http://localhost:4200/assets/db.json').subscribe(customer=>{
      this.customers = customer
      console.log(this.customers)
    })
  }


  addUsers(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:4200/assets/db.json',user)
  }

  getUsers():Observable<User>{
    return this.http.get<User>('http://localhost:4200/assets/db.json')
  }


  getById(id:number):Observable<User>{
     return this.customers.find((user: User) => {
       user.id == id;
    });
  }



}
