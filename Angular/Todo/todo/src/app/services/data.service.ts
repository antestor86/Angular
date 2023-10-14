import {Injectable} from "@angular/core"
import { Todo } from "../interfaces/todos.interface"
import { Data } from "@angular/router"
import {HttpClient} from '@angular/common/http'
import { Observable, map, tap } from "rxjs"
@Injectable({providedIn:'root'})

export class DataService{
  data:Todo[] = []
  url = 'http://localhost:3000/todos'
  constructor(private http:HttpClient){
  }

  getData():Observable<any>{
    return this.http.get<Todo>(this.url).pipe(
      map((responseData: any) => {
        const postArray: Todo[] = []
        for (let i in responseData) {
          this.data.push(responseData[i])
        }
        return responseData
      })
    )
  }

  editData(info:Todo){
      return info
  }

  removeData(id:any){
      return this.http.delete<Todo>(id)
  }

  addData(item:Todo):Observable<Todo>{
      let newData = {}
      return this.http.post<Todo>(this.url,item).pipe(
          tap(
            ()=>{
              newData = {...item}
            }
          )
      )
      }

}
