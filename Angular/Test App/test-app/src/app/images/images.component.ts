import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  subListStatus = false;
  items = ['Menu','Mail','Social']
  
  addSubStatus(){
    return this.subListStatus;
  }

  removeSubStatus(){
    return this.subListStatus;
  }
  
  openMenu(){
    if(!this.subListStatus){
      this.subListStatus = true;
    }
    else{
      this.subListStatus = false;
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
