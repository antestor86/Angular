import { Injectable, OnInit } from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http"

export interface User{
  id?:number,
  username:string,
  login:string,
  password:string
}
@Injectable({providedIn:'root'})
export class UserService {
   users:User[] =[
    {id:10,username:'Razmik',login:'empeor86',password:'123456'}
  ]




}
