import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
  providers: [DataService]
})
export class ComponentComponent implements OnInit {
  gameName = new FormControl("");
  gameStatuss = false;
  searchField = "";
  gameList=[
    {game:'Medal Of Honor',url:'https://upload.wikimedia.org/wikipedia/ru/9/98/MOHWARgenKEYART.preview.jpg',type:'Shooter'},
    {game:'Mortal Combat',url:'https://www.tonica.la/__export/1602947436460/sites/debate/img/2020/10/17/mortal-kombat-portada.jpg_1902800913.jpg',type:'Fighting'},
    {game:'Call of Duty',url:'https://store-images.s-microsoft.com/image/apps.18374.70799132231561062.6e2fe24e-9457-4f92-9497-6fbb8d194c90.04747c49-bbba-4e6f-8a1c-98a86acd595e',type:'Shooter'},
    {game:'Need For Speed Undecover',url:'https://upload.wikimedia.org/wikipedia/ru/a/a3/Need_for_Speed_Undercover_Coverart.jpg',type:'Racing'},
    {game:'FIFA20',url:'https://upload.wikimedia.org/wikipedia/ru/e/ec/FIFA20.jpg',type:'Sport'},
    {game:'Assasins Creed Revelations',url:'https://upload.wikimedia.org/wikipedia/ru/d/d9/Assassins_Creed_Revelations_Cover.jpg',type:'Action'},
    {game:'DOOM',url:'https://upload.wikimedia.org/wikipedia/ru/f/fc/Doom_new_cover_art.jpg',type:'Action'},
  ]

  checkGame(){
    console.log('checked');
    this.searchField = this.gameName.value;
        
  }
  constructor() { }
  

  ngOnInit(): void {
  }

}
