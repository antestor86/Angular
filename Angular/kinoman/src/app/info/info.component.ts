import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id:number|undefined;

  constructor(private activatedRoute:ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
