import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/autentichate.service';
export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: { street: string; suite: string; city: string; zipcode: string };
  phone: string;
  company: { name: string; catchPhrase: string; bs: string };
}
@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css'],
})
export class SingleuserComponent implements OnInit,OnDestroy {
  customer: User|any;
  routeSubscription: Subscription | any;
  constructor(
    private route: ActivatedRoute,
    private request: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptionToRoute();

  }

  subscriptionToRoute(){
     this.route.params.subscribe((params:Params)=>{
      console.log('Params',params)
      this.customer = this.request.customers.getById(+params.id)//Էս հատվածից չի սռացվում
      console.log('List',this.customer)

    })

  }


  ngOnDestroy(): void {
    this.routeSubscription.unsubsctribe();

  }
}
