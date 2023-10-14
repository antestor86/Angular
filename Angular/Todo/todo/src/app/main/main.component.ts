import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Todo } from '../interfaces/todos.interface';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  content = ""
  constructor(private data:DataService){

  }

  header:String = 'todo'
  todos:Todo[] = []

  addData(){
      this.insertData()
      console.log(this.content)
  }

  insertData(){
        let newData = this.content
        let newDataStatus = false
        let newDataObject = {
            content:newData,
            status:newDataStatus
        }
        this.data.addData(newDataObject).pipe(
          tap((item)=>{
                item.content = newDataObject.content
                item.status = newDataObject.status
          })
        ).subscribe(item=>{
          console.log(item)
          this.reloadPage()

        })
    }


reloadPage(){
  window.location.reload()
}


}
