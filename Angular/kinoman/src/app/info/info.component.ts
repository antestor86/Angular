import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators'
import { Movie } from '../main/main.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id:number|any;
  movie:Movie|undefined;
  movies:Movie[] = [];

  constructor(private route:ActivatedRoute,private data:DataService) {}

  ngOnInit(): void {
    this.initId();
    this.getItem(this.id);
    console.log(this.movie)


  }

  initId(){
    this.route.paramMap.pipe(
      switchMap(params=>params.getAll('id'))
    ).subscribe(data=>{
      this.id = data
     //console.log(this.id);
    })
  }

  getItem(id:number){
      this.data.getData().subscribe((data:any)=>{
        for(let movie of data){
            this.movies.push(movie);
        }
        return this.movie= this.movies.find((item:any)=>{
          item.id == id;
        })
      })
  }
}
