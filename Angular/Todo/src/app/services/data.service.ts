import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "../../assets/item.model";

@Injectable({providedIn:"root"})
export class Requests{
    constructor(private data:HttpClient){

    }

    getData(){
        return this.data.get('http://localhost:3000/todos')
    }

    setData(item:Item){
        return this.data.post<Item>('http://localhost:3000/todos',item)
    }

    postCheck(check:boolean){
      return this.data.post('http://localhost:3000/todos',check)
    }

    removeData(id:number){
        return this.data.delete(`http://localhost:3000/todos/${id}`)
    }
}
