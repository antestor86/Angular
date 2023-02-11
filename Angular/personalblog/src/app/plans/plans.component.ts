import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  public pictures = [
    {src:"../../../assets/pictures/adidas.png"},
    {src:"../../../assets/pictures/bmw.png"},
    {src:"../../assets/pictures/caxik.png"},
    {src:"../../assets/pictures/cg.jpg"}

  ]
  morePos:any|undefined
  openStatuss = true;
  left = 0;
  posx = this.left + 'px';
  carouselLength = this.pictures.length;
  listLength = (350 * this.carouselLength);
  buttonActive = false;
  leftButtonActive = false;
  absolutePos :number|undefined

  constructor() { }


  ngOnInit(): void {
  }

  moveLeft(){
    this.left =this.left + 350;
    this.posx = this.left+'px'
    this.buttonActive = false;
    console.log('left ='+this.left)
    if(this.left==0){
      this.leftButtonActive = true;
    }
    else{
      this.leftButtonActive = false

    }
  }


  //-------------------------------------------------------------

  moveRight(){
    this.left = this.left - 350;
    this.posx = this.left + 'px';
    this.absolutePos = Math.abs(this.left)
    console.log('left='+this.absolutePos)
    this.leftButtonActive = false;
    if(this.absolutePos == this.listLength){
      this.buttonActive = true
    }
    else{
      this.buttonActive = false

    }

  }

  showEl(){
    this.openStatuss = false
  }

  hideEl(){
    this.openStatuss = true;
  }

  elements(){

    if(this.openStatuss){
      this.showEl()
    }
    else{
      this.hideEl()
    }


  }




}
