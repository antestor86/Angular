import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  customer$:Observable<User>;
  routeSubscription: Subscription | any;
  statuss:boolean=false;
  form:FormControl|any;
  constructor(
    private route: ActivatedRoute,
    private request: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptionToRoute()
    this.formInit()

  }

  formInit(){
    this.form=new FormGroup({
      name:new FormControl(''),
      username:new FormControl(''),
      phone:new FormControl('')
    })
  }

  subscriptionToRoute(): void {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      console.log('ID:', params);
      this.customer$ = this.request.getById(+params.id);
    });
  }



  backToHome(){
    this.router.navigate(['/user']);
  }

  edit(){
    this.statuss = true;
  }

  finish():void{
    this.statuss = false;
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      console.log('ID:', params);
      this.customer$ = this.request.addUsers(this.form.value);
    });

  }


  ngOnDestroy(): void {
    this.routeSubscription;

  }
}
