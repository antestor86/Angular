import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title:string = 'Favorite Movies';
  movieTitle:string | undefined;
  imageUrl:string | undefined;
  movieRate:number | undefined;
  showModal:boolean = false;
  movies = [
    {
      title:'Matrix',
      url:'https://upload.wikimedia.org/wikipedia/ru/9/9d/Matrix-DVD.jpg',
      rate:5
    }
  ]

  showForm(){
    this.showModal = true;
    console.log('Clicked')
  }

  hideForm(){
    this.showModal = false;
  }

  addMovie(){
    console.log('movie added');
    this.movies.push(
      {
        title:this.movieTitle,
        url:this.imageUrl,
        rate:this.movieRate,
      }
   )
    this.showModal = false;
    this.movieTitle = '.';
    this.imageUrl = '.';
    this.movieRate = 5
  }
  deleteMovie(){

  }
  


  ngOnInit(): void {
  }

  

}
