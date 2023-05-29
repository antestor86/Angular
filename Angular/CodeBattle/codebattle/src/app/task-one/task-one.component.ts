import { Component } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent {
  numbers = [12,25,36,24,56,16,76,55]

  sortNumbers(){
      return this.numbers.sort()
  }


}
