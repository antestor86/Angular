import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Homeitem} from "../Models/homeitem.model";

@Injectable({providedIn:"root"})
export class HomeData {
  constructor(public data:HttpClient) {
  }

  getData():any{
    return this.data.get("http://localhost:3000/homeitems")
  }

  setData(data:Homeitem):any{
    return this.data.post("http://localhost:3000/homeitems",data);
  }

}
