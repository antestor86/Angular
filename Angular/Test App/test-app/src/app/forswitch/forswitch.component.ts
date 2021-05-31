import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forswitch',
  templateUrl: './forswitch.component.html',
  styleUrls: ['./forswitch.component.css']
})
export class ForswitchComponent implements OnInit {
  items=[
    'level1',
    'level2',
    'level3'
  ]
  current = 'Main Menu'
  onClick(text:string){
    this.current = text;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
