import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Homeitem} from "../Models/homeitem.model";
import {HomeData} from "../Services/homeitems.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  src = "../../assets/pictures/pano.jpg";
  logos = [
    "../../assets/pictures/bmw.png",
    "../../assets/pictures/adidas.png",
    "../../assets/pictures/paper.png",
    "../../assets/pictures/caxik.png",

  ]

  themes = [

    {src:"../../assets/pictures/it.jpg",text:"IT Technologies"},
    {src:"../../assets/pictures/cg.jpg",text:"CG Industry"},
    {src:"../../assets/pictures/history.jpg",text:"History"}

  ]


  menu:Homeitem[]|any;

  constructor(private data:HomeData) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    return this.data.getData().subscribe((item:any)=>{
       this.menu = item;
    })
  }

}
