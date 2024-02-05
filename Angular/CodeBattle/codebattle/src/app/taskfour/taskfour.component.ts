import { Component } from '@angular/core';

@Component({
  selector: 'app-taskfour',
  templateUrl: './taskfour.component.html',
  styleUrls: ['./taskfour.component.css']
})
export class TaskfourComponent  {
  color:String = 'grey'
  constructor(){

  }

  makeColor(){
    let r = Number(Math.random()*100)+Number(Math.random()*100)+Number(Math.random()*100);
    let g = Number(Math.random()*100)+Number(Math.random()*100)+Number(Math.random()*100);
    let b = Number(Math.random()*100)+Number(Math.random()*100)+Number(Math.random()*100);
    console.log(r)
    console.log(g)
    console.log(b)
    let color = `${r}` + ',' + `${g}` + ',' + `${b}`;
    this.color = 'rgb' + '(' + color + ')';
    return this.color
  }
 /*  */


}
