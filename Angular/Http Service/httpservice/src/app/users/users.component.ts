import { Component, OnInit } from '@angular/core';
import {User,HttpService} from './adduser.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users:User[]=[];
  userName = '';
  email = '';
  phoneNumber = '';
  city = '';
  country = ''
  constructor(private userservice:HttpService) { }
  ngOnInit(): void {
  }
  getUsers(){
    this.userservice.getUser().subscribe(user=>{
      //this.users.concat(user);
      console.log(user)
      //this.users.push(user);*/
      for(let i in user){
        this.users.push(user[i])
      }
    })
  }

  addUser(){
    if(!this.userName.trim() && !this.phoneNumber.trim() && !this.email.trim()){
      return
    }
    this.userservice.addUser({
      name:this.userName,
      phone:this.phoneNumber,
      email:this.email,
 }).subscribe(user=>{
      this.users.push(user)
    })
  }
  removeUser(id:number){
    this.userservice.removeUser(id).subscribe(()=>{
      this.users = this.users.filter(r=>{
        return r.id!==id
      })
    })
  }
}
