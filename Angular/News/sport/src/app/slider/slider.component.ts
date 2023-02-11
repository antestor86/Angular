import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

import { Article } from '../interfaces/article.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  articles!: Article[]
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(): void {
    this.data.getData().pipe(
      tap((item: any) => {
        console.log(item)
      })
    ).subscribe((data) => {
      this.articles = data

    })
  }



}
