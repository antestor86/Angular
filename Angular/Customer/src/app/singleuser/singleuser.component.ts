import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, User } from '../services/autentichate.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  customer:User|any
  registr:User|any

  constructor(private route:ActivatedRoute, private request:AuthService,private router:Router) { }

  ngOnInit(): void {
     this.route.params.subscribe((params:Params)=>{
      //this.customer=this.request.getById(+params.id)
      console.log('Params',params)
    })
  }

}
