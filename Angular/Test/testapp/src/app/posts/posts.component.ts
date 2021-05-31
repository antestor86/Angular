import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [
    {id:1,title:'post1'},
    {id:2,title:'post2'},
    {id:3,title:'post3'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
