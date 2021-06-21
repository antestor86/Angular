import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, of, interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User, DataService } from '../services/data.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  customer$: Observable<User>;
  userID:any;
  statuss: boolean = false;
  addStatuss = false;
  form: FormGroup;
  routeSubscribe: any;


  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.subscriptionToRoute();
  }

  formInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      phone: new FormControl(null),
      image: new FormControl(null),
      email: new FormControl('', [Validators.email]),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl(''),
      }),
    });
  }

  backToHome() {
    this.router.navigate(['/users']);
  }

  editStatuss() {
    if (!this.statuss) {
      this.statuss = true;
    } else {
      this.statuss;
    }
  }

  subscriptionToRoute():Observable<User> {
   return  this.customer$ = this.route.params
      .pipe(
        map((params: Params) => +params.id),
        switchMap((id) =>
          this.data.getById(id).pipe(
            tap(value => {
              this.form.patchValue(value)
            }),
            catchError((err) => of(err)))
        )
      )

  }


  finish():void{
    if (this.form.value) {
      this.route.params.subscribe((params: Params) => {
         const curId = params.id
         this.form.value.id = +curId
         console.log(typeof(this.form.value.id))
         this.data.editUser(this.form.value).subscribe(()=>{
           console.log(this.form.value)
            this.customer$ == this.form.value

        })
      })


      this.addStatuss = true;
    }
    else {
      this.addStatuss = false;
    }
  }



  ngOndestroy(): void {
    this.routeSubscribe.unsubscribe();
  }
}
