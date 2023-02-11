import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {ImageSliderComponent} from "./imageslider.component";

@NgModule({
  declarations:[
    ImageSliderComponent
  ],
  imports:[

    CommonModule
  ],
  exports:[
    ImageSliderComponent
  ]
})

export class CarouselModule{

}
