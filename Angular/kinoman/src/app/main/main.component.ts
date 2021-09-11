import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
export interface Movie{
  id:number,
  title:string,
  year:number,
  genre:string,
  country:string,
  rate:string,
  poster:string
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movies:Movie[] = [];
  constructor(private http:DataService) { }
  imageSource:string [] = [];

  ngOnInit(): void {

    this.getData();
    console.log(this.movies)

    

  }

  getData(){
    this.http.getData().subscribe((data:any)=>{
      for(let movie of data){
          this.movies.push(movie)
      }
    })

  }

}
