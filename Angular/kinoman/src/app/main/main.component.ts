import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { activeElement } from '../directives/active.directive';
import { TempService } from '../services/temp.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  genre:string|undefined
  filterStatuss:boolean = false;
  filteredMovies:Movie [] = [];
  file:File | null = null;
  isTrue:boolean = false;

  constructor(private http:DataService,private tempServie:TempService,) { }

  ngOnInit(): void {
    this.getData();
    this.getGenres();


  }

  //init Form

  //Get Movies Data
  getData(){
    this.http.getData().subscribe((data:any)=>{
      for(let movie of data){
          this.movies.push(movie)
      }
      this.length = this.movies.length;
    })
  }

  //Get Genre Types
  getGenres(){
    this.http.getGenres().subscribe((data:any)=>{

      for(let item of data){
        this.genres.push(item);
      }
    })
  }

  //Filter Types
  getGenre(event:any):void{
    if(!this.filterStatuss){
      this.movies.filter(
        (item:any)=>{
          if(item.genre.includes(event)){
            this.filteredMovies.push(item);
            this.filterStatuss = true;
          }
        }
      )
    }
    else{
      this.filteredMovies = [];
      this.movies.filter(
        (item:any)=>{
          if(item.genre.includes(event)){
            this.filteredMovies.push(item);
            this.filterStatuss = true;
          }
        }
      )

    }
  }

  showBlock(){
    this.isTrue = true;
  }

}
