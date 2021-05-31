import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  beerName = '';
 
  beerList = [
    {
      beer:'Kilikia',
      url:'https://static.parma.am/origin/product/1024/37218.jpg',
      type:'dark beer',
      price:440,
      id:0
    },
    {
      beer: 'Dilijan',
      url: 'https://static.parma.am/origin/product/1024/75505.jpg',
      type: 'light beer',
      price: 370,
      id: 1
    },
    {
      beer: 'Kotayk',
      url: 'https://static.parma.am/origin/product/1024/80966.jpg',
      type: 'Weiss beer',
      price: 370,
      id: 2
    },
    {
      beer: 'Dargett',
      url: 'https://static.parma.am/origin/product/1024/83291.jpg',
      type: 'Light beer',
      price: 600,
      id: 3
    },
    {
      beer: 'Lowenbrau',
      url: 'https://static.parma.am/origin/product/1024/52308.jpg',
      type: 'Beer - light',
      price: 600,
      id: 4
    },
    {
      beer: 'Holsten',
      url: 'https://static.parma.am/origin/product/1024/43563.jpg',
      type: 'Beer - light',
      price: 720,
      id: 5
    },
    {
      beer: 'Stella',
      url: 'https://static.parma.am/origin/product/1024/26703.jpg',
      type: 'Beer - light',
      price: 640,
      id: 6

    },
    {
      beer: 'Zatecky Gus',
      url: 'https://static.parma.am/origin/product/1024/25867.jpg',
      type: 'Beer -light',
      price: 520,
      id: 7
    }
  ]
  beerItems = this.beerList;
  
  constructor() { }
  addWords(value:string){
    this.beerName = value;
  }
  findItem(){
    if(this.beerName.length!=0){
      return this.beerItems= this.beerItems.filter((item) => {
         item.beer.toLocaleLowerCase().match(this.beerName.toLocaleLowerCase());
    })
    this.beerItems = this.beerList
  }
  else{
    return this.beerList;
  }

}
  ngOnInit(): void {
  }
  changeStyle = false;
  replaceStyle(){
    if(!this.changeStyle){
      this.changeStyle = true
    }
    else{
      this.changeStyle = false;
    }
  }



}
