import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService, User } from '../services/autentichate.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  customer:User|any

  constructor(private route:ActivatedRoute, private request:AuthService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.customer=this.request.getById(+params.id)
      console.log(this.customer)
    })
  }

}
