import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { interval } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  providers:[HttpClient,DataService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  inter = []
  constructor(private data:DataService){

  }

  ngOnInit(): void {
    this.getInterval()
  }

  setData(){

  }

  getInterval(){
    interval(1000).subscribe(data=>{
        console.log(data)
    })
  }


}
