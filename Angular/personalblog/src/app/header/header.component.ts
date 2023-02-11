import { Component, OnInit } from '@angular/core';

import {MenuItems} from "../Services/menudata.service";
import {Router,RouterModule} from "@angular/router";
import {MenuitemModel} from "../Models/menuitem.model";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu:MenuitemModel[]|undefined;
  links = ['/','state'];
  routers = ['/','/article','/links','/plans'];

  constructor(private items:MenuItems, private router:Router) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems():MenuitemModel{
  return this.items.getData().subscribe((m:any)=>{
    this.menu = m
  })

  }

}
