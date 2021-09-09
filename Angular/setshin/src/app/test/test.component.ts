import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service"
export class User{
  constructor(
    public name : string,
    public id:number,
    public username:string
    ){}

}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[DataService]
})
export class TestComponent implements OnInit {
  users : User[] = [];
  constructor(private httpService:DataService) { }

  ngOnInit():void {
    this.httpService.getData().subscribe((data:any)=>{
      console.log(data);
      this.users = data;
      console.log(this.users)
    })
  }

}
