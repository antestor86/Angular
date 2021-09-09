import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { User } from "../posts/user";

@Injectable()
export class HttpService{
    user:User|undefined
    constructor(private http:HttpClient){}
    getData(){
      return this.http.get('data.json')
    }
}
