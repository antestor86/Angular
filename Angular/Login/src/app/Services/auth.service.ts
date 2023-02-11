import {Injectable} from "@angular/core";
import {User} from "../Models/user.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class AuthService {

  constructor(public user:User,private data:HttpClient) {
  }

  getUsers():Observable<User[]>{
    return this.data.get<any>('http://localhost:3000/users')
  }

  addUser(user:User):Observable<User>{
    return this.data.post<User>('http://localhost:3000/users',user)
  }

  removeUser(id:number){
    return this.data.delete<void>(`http://localhost:3000/users/${id}`)
  }
}
