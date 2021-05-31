import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Phone, PhoneService } from '../phone.service';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  phones:Phone[]|any
  edited_phones:Phone[]|any
  items = [
    'Add Phone',
    'Remove Phone',
    ]
    showIds = false

  constructor(private route:Router,private posts:PhoneService,private showid:ActivatedRoute) { }

  ngOnInit(): void {
    this.showid.queryParams.subscribe((params:Params)=>{
      this.showIds = !!params.showIds
    })
    this.phones = this.posts.phones
    console.log(this.phones)
  }

  addPhone(){
    this.route.navigate(['/admin'])
  }

  removePhone(id:number){

    return this.phones.filter((item:number)=>{
       item!=id
       console.log(this.phones)
    })

  }

  hideId(){
    this.route.navigate(['/posts'],{
      queryParams:{showIds:false}
    })
    console.log(this.showIds)
    this.showIds = false
  }




}
