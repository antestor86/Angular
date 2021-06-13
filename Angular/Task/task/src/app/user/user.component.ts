import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User, DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  customer$: Observable<User> | any;
  routeSubscription: Subscription | any;
  statuss: boolean = false;
  form: FormControl | any;
  routeSubscribe: any;
  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.formInit()
    this.subscriptionToRoute()

  }

  formInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      phone: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      url: new FormControl('')
    })
  }

  backToHome() {
    this.router.navigate(['/users']);
  }

  edit() {
    this.statuss = true;
  }

  subscriptionToRoute(): void {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      console.log('ID:', params);
      this.customer$ = this.data.getById(+params.id);
      console.log(this.customer$.name)
    });
  }

  finish(): void {
    this.statuss = false;
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      console.log('ID:', params);
      this.customer$ = this.data.addUsers(this.form.value);
    });

  }

  ngOndestroy(): void {
    this.routeSubscribe.unsubscribe();
  }


}
