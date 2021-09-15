import { Genre, Movie } from './../main/main.component';
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { tap , map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class DataService{
   movies:Movie[]|undefined
   genres:Genre[]|undefined
   movie:Movie|any;


  constructor(private http:HttpClient){}

  getData(){
    return this.http.get<Movie[]>("http://localhost:3000/movies").pipe(
      tap((val)=>{
        this.movies = val;
      })
    )
  }

  getGenres(){
    return this.http.get<Genre[]>("http://localhost:3000/genres").pipe(
      tap((val)=>{
        this.genres = val;
      })
    )}

  getById(id:number){
    const movie:Movie|any = this.getData().pipe(
      map((value:any)=>value.find((item:any)=>item.id == id))
    );
    return movie
  }


}
