import { Component,  OnInit } from '@angular/core';
import { AuthData } from '../services/auth.service';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  constructor(private auth:AuthData) { }
  
  ngOnInit(): void {

  }

  onSubmit(){
    return this.auth.getData(1,2);
  }
}
