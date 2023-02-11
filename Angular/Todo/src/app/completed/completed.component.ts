import { Component, OnInit } from '@angular/core';
import { Item } from '../../assets/item.model';
import { Requests } from '../services/data.service';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  todoList:Item[]|undefined;
  dataLength:number|undefined;
  completedList:Item[]=[]
  completedLength:number|undefined

  constructor(private data:Requests) { }

  ngOnInit(): void {
    this.getData();

  }

  getData(){
    this.data.getData().subscribe((item:any)=>{
      this.todoList = item
      this.dataLength = this.todoList?.length;
    })
  }

}
