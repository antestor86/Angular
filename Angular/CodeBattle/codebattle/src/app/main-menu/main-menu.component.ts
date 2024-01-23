import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  constructor(private router:Router){

  }



  routes = [
    {
      name:'Task 1',
      route:  '/task_one'
    },
    {
      name:'Task 2',
      route:'task_two'
    },
    {
      name:'Task 3',
      route:'task_three'
    },
    {
      name:'Task 4',
      route:'task_four'
    }

  ]



  openTaskOne(){
      this.router.navigate(['/task_one'])
  }




}
