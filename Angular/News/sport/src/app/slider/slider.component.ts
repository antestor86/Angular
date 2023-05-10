import { Component, OnInit } from '@angular/core';


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
    this.data.getData().subscribe((data) => {
      this.articles = data;
      console.log(data[0])
    })
  }



}
