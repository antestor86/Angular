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
      name:'Task One',
      route:  '/task_one'
    },
    {
      name:'Task Two',
      route:'task_two'
    }

  ]



  openTaskOne(){
      this.router.navigate(['/task_one'])
  }




}
