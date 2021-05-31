import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpClientModule} from "@angular/common/http";

export interface Todo{
  id:number,
  name:string,
  age?:number,
  username:string

}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  todos:Todo[]=[];
  title="http"
  userName=''
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/users').subscribe((todos)=>{
      this.todos = todos

    })
  }
  addUser(){
    if(!this.userName.trim()){
      return
    }
    const newUser:any={
      username:this.userName
    }
    this.http.post<any>('https://jsonplaceholder.typicode.com/users',newUser).subscribe(todo=>{
      console.log(todo)
      this.todos.push(todo)
      todo=""
    })
 }
 removeUser(id:number){
  this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(()=>{
    this.todos=this.todos.filter(t=>{
      return t.id !== id

    })
  })
 }
}
