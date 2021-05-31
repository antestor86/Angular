import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-template',
  templateUrl: './movie-template.component.html',
  styleUrls: ['./movie-template.component.css']
})
export class MovieTemplateComponent implements OnInit {
@Input() movie:{
    title: string,
    url: string, 
    rate: number}|undefined;
width = '180';
height = "250";


  ngOnInit(): void {
  }

}
