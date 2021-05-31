import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @Input() arms:{ id:number,title: string; type: string; url: string; }|any
  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  

  backToPosts(){
    this.router.navigate(['/post'])
  }

}
