import { Injectable } from "@angular/core"
import { ToDo } from "../interfaces/todo.interface"
import { HttpClient} from "@angular/common/http"


@Injectable({providedIn:'root'})
export class DataService{
  todo!:ToDo
  URL = 'https://todo-258c9-default-rtdb.firebaseio.com/'
  todos:ToDo[] = []
  constructor(private http:HttpClient){

  }

  getData(){

  }

  addData(){

  }

  removeData(){

  }

}
