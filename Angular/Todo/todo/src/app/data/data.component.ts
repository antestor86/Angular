import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Todo } from '../interfaces/todos.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers:[DataService]
})
export class DataComponent {
todos:Todo[] = []
content  = ''
constructor(private data:DataService){}

ngOnInit(): void {
    this.getData()
}

getData(){
  this.data.getData().subscribe((todos:Todo[])=>{
    console.log(this.todos)
    this.todos = todos
  })
}
}
