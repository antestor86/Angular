import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MenuitemModel} from "../Models/menuitem.model";
import {Homeitem} from "../Models/homeitem.model";
import {Link} from "../Models/link.model";

@Injectable({providedIn:"root"})
export class LinksService {
  constructor(private data:HttpClient) {}

  getData():any{
     return this.data.get<Link[]>('http://localhost:3000/links')
  }

  setData(newData:Link):any{
    return  this.data.post<any>("http://localhost:3000/links",newData);
  }

  reomveData(id:any){
    return this.data.delete(`http://localhost:3000/links/${id}`)
  }

}
