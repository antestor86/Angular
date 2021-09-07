import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/autentichate.service';
export interface User {
  id?: number;
  name: string;
  surname: string;
  age: string;
  country: string;
  city: string;
  addresses: string[];
  gender: string;
  avatar: string;
  phones: { mobile: string; home: string };
  skills: string[];
}
@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css'],
})
export class SingleuserComponent implements OnInit, OnDestroy {
  customer$:Observable<User>;
  routeSubscription: Subscription | any;

  constructor(
    private route: ActivatedRoute,
    private request: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptionToRoute();
  }

  subscriptionToRoute(): void {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      console.log('ID:', params);

      this.customer$ = this.request.getById(+params.id);
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
