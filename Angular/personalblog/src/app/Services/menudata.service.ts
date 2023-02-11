import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MenuitemModel} from "../Models/menuitem.model";

@Injectable({providedIn:"root"})
export class MenuItems {
  constructor(private data:HttpClient) {}

  getData():any{
    return this.data.get<MenuitemModel>('http://localhost:3000/menuitems')
  }

}
