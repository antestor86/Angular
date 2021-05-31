import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PostsComponent } from '../posts/posts.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post :{ id:number,title: string; type: string; url: string; }|any
  constructor(post:PostsComponent,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log('Params',params)
    })
  }

}
