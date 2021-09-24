import { Component, ElementRef } from '@angular/core';
import { TempService } from './services/temp.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kinoman';
  filterText = "";
  hideen = false;
  isTrue:boolean= false;
  constructor(private tempService:TempService){}

  find(){
    console.log(this.filterText)
  }

  show(){
      this.tempService.show()
  }

  hide(){
    this.tempService.hide()
  }

  showBlock(){
    if(!this.isTrue){
      this.isTrue = true;
    }
    else{
      this.isTrue = false;
    }

    console.log(this.isTrue)
  }

}
