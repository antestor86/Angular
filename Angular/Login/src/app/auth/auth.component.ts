import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  logo:string = "../assets/logo.png"
  constructor() { }

  ngOnInit(): void {
  }

}
