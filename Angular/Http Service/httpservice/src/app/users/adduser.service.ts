import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User{
    id?:number;
    name:string|undefined;
    phone:string|undefined;
    email:string|undefined;

 }
@Injectable({providedIn:'root'})
export class HttpService{
  constructor(private http:HttpClient){}
  getUser():Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

  addUser(newUser:User):Observable<User>{
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users',newUser)
  }

  removeUser(id:number){
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
