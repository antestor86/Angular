import { Component, OnInit } from '@angular/core';
import {faUserCircle, faUserTimes} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

    username:string = 'Razmik Avetisyan';
    title:string = `Created by ${this.username}`;
    faCocktain = faUserCircle;

  constructor() {}


  ngOnInit(): void {

  }






ngOnDestroy() {

  }
}
