import { Component } from '@angular/core';


@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent {

    makeRandomColor(){
      let r = Number(Math.random()*100)+Number(Math.random()*100)+Number(Math.random()*100);
      let g = Number(Math.random()*100)+Number(Math.random()*100)+Number(Math.random()*100);
      let b = Number(Math.random()*100)+Number(Math.random()*100)+Number(Math.random()*100);
      let color = `${r}` + ',' + `${g}` + ',' + `${b}`;
      let backgroundColor = 'rgb' + '(' + color + ')';
      return backgroundColor

 }

  addBox(event:any){
    const width = '100px';
    const heigth = '100px';

    const posx = event.clientX + "px";
    const posy = event.clientY + "px";

    const div = document.querySelector('div')


    const boxDiv = document.createElement('div');

    boxDiv.style.width = width;
    boxDiv.style.height = heigth;
    boxDiv.style.backgroundColor = this.makeRandomColor();
    boxDiv.style.position = 'absolute';
    boxDiv.style.top = posy;
    boxDiv.style.left = posx;

    div?.appendChild(boxDiv)

  }



}
