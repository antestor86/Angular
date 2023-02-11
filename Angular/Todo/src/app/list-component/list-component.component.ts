import { Component, OnInit } from '@angular/core';
import { Item } from '../../assets/item.model';
import {Requests} from '../services/data.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  todo:any;


  /*todosList:Item[] = [
    {label:"Buy Milk",completed:true},
    {label:"Go to The Meeting",completed:false},
    {label:"Math Examine",completed:true},
  ]*/

  todosList:Item[]|undefined;
  postData:Item|undefined;
  constructor(private data:Requests) { }

  ngOnInit(): void {

    this.getData()
  }

  getData(){
    this.data.getData().subscribe((item:any)=>{
      this.todosList = item
    })
  }

  addTodo(event:string){
      this.todo = event
      this.postData = {label:this.todo,completed:false}
      this.data.setData(this.postData).subscribe((item:any)=>{
        this.postData = item;
        item.id = +item.id
       this.todosList?.push(item)
      })
  }



  removeUser(id:any){

  }


}
