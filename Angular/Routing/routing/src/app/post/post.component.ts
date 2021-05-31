import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phone, PhoneService } from '../phone.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  phone:Phone|any

  constructor(private router:ActivatedRoute,private phoneservice:PhoneService,private route:Router) { }
  showIds = false
  ngOnInit(): void {
    this.router.params.subscribe((params:Params)=>{
      console.log(params)
      this.phone = this.phoneservice.getPhone(+params.id)
      console.log(this.phone.id)
    })
  }

  backHome(){
    this.route.navigate(['/'])
  }

  backPosts(){
    this.route.navigate(['/posts'])
  }

}
