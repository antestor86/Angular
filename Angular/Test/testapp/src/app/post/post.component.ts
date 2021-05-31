import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id:number|undefined
  constructor(private activeRoute:ActivatedRoute) {
    this.id = activeRoute.snapshot.params['id']
  }

  ngOnInit(): void {
  }

}
