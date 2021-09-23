import { Genre, Movie } from './../main/main.component';
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class TempService{
  isTrue = false


  show(){
    this.isTrue = true
  }

  hide(){
    this.isTrue = false;
  }

}
