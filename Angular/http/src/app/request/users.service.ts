import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface Todo{
  id:number,
  name:string,
  age?:number,
  username:string

}
@Injectable({providedIn:'root'})
export class UsersService{
  constructor(private http:HttpClient){}
  addUsers(todos:Todo){
     return  this.http.post<Todo>('https://jsonplaceholder.typicode.com/users',todos)
      //.subscribe(todo=>{
      //console.log(todo)
      //todos.push(todo)
      //todo=""
    //})
  }

}
