import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators'
import { Movie } from '../main/main.component';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id:number|any;
  movie$:Observable<Movie> | undefined
  movies:Movie[]|undefined;

  constructor(private route:ActivatedRoute,private data:DataService) {}

  ngOnInit(): void {
    this.initId();
  }

  initId(){
    this.route.paramMap.pipe(
      switchMap(params=>params.getAll('id'))
    ).subscribe(data=>{
      this.id = data
     console.log(this.id);
    })
  }


}
