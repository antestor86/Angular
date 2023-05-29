import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent {
  constructor(private elementRef:ElementRef,private render:Renderer2) {

  }
  numbers = [12,25,36,24,56,16,76,55,1,25,3,5,88]
  status = false;
  addNumbers():any{
     this.numbers.push(this.numbers[this.numbers.length-1] + 1)
     const li =Array.from(document.getElementsByTagName('li'));
     for(let i=0;i <= li.length;i++){
        if(i+1 == li.length){
          li[i].style.backgroundColor = 'red';
        }
        else{
          li[i].style.backgroundColor = 'rgb(22, 85, 158)'
        }

        console.log(i)
     }

  }


}
