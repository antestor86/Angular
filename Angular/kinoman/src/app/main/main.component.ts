import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { activeElement } from '../directives/active.directive';
export interface Movie{
  id?:number,
  title:string,
  year:number,
  genre:string,
  country:string,
  rate:string,
  poster:string,
  link:string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  movies:Movie[] = [];
  page = 1
  totalLength:any;
  length:number | any;
  constructor(private http:DataService) { }


  ngOnInit(): void {
    this.getData();
    console.log(this.movies)
  }

  getData(){
    this.http.getData().subscribe((data:any)=>{
      for(let movie of data){
          this.movies.push(movie)
      }
      this.length = this.movies.length;
    })
  }


}
