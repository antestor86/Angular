import {Component, Input, OnInit} from '@angular/core';
import {SliderInterface} from "../interfaces/slider.interface";


@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() slides:SliderInterface[] = [];
  @Input()indicators = true;
  @Input() controls = true;
  currentindex:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  selectImage(index:number):void{
    this.currentindex = index
  }

  onPrevClick():void{
    if(this.currentindex){
      this.currentindex = this.slides.length - 1;
    }
    else{
      this.currentindex --
    }
  }

  onNextClick():void{
    if(this.currentindex === this.slides.length - 1){
      this.currentindex = 0
    }
    else{
      this.slides.length ++
    }
  }

}
