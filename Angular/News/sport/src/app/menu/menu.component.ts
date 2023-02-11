import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DataService } from '../services/data.service';
import { MenuItems } from '../interfaces/menuItems.interface';
import { Router } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuitems!: String[];

  isOpen = false;
  burgerStatuss = false;
  burgerItems: String[] = [];
  internatioal: String = "";
  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getItems();
    this.getBurgerItems();
  }


  getItems() {
    return this.data.getMenuItems().subscribe(item => {
      this.menuitems = item
    })
  }

  getBurgerItems() {
    this.data.getBurgerItems().pipe(
      map((data) => {
        this.burgerItems = data
      })
    ).subscribe((data) => {
      console.log(data)
    })
  }

  toogle(elem: HTMLElement) {
    console.log(elem.innerHTML)
    if (elem.innerText === 'Միջազգային ֆուտբոլ') {
      if (!this.isOpen) {
        this.isOpen = true
      }
      else {
        this.isOpen = false;
      }

      console.log('Menu Is Opened')
    }
    else {
      console.log('Menu Is Not opened')
      this.isOpen = false
    }

  }

  goToContent(event: HTMLElement) {
    if (event.innerText === 'Գլխավոր') {
      this.burgerStatuss = false
      this.router.navigate(['/'])
    }

    if (event.innerText === 'Հայկական Ֆուտբոլ') {
      this.burgerStatuss = false
      this.router.navigate(['/armenian'])
    }
    if (event.innerText === 'Տեսանյութեր') {
      this.burgerStatuss = false
      this.router.navigate(['/videos'])
    }
    else {

    }
  }




}
