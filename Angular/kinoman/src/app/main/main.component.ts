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

export interface Genre{
  name:string
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
  filterText:string = "";
  genres:Genre[] = [];
  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.getData();
    this.getGenres();
    console.log(this.movies);
    console.log(this.genres);

  }

  getData(){
    this.http.getData().subscribe((data:any)=>{
      for(let movie of data){
          this.movies.push(movie)
      }
      this.length = this.movies.length;
    })
  }

  getGenres(){
    this.http.getGenres().subscribe((data:any)=>{
      console.log(data)
      for(let item of data){
        this.genres.push(item);
      }
    })
  }


}
