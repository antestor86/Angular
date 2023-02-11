import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {User} from "../Models/user.model";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:User[]|undefined
  constructor(private data:AuthService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.data.getUsers().subscribe((item:any)=>{
      this.users = item
      console.log(this.users)
    })

  }

  removeUser(id:number){
      this.data.removeUser(id).subscribe(()=>{
         this.getUsers()
      })
  }

}
