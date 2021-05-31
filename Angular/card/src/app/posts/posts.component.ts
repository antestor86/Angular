import { Component, OnInit } from '@angular/core';
import {PostComponent} from '../post/post.component'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  showIds = false
  armsItems = [
    {id:1,title:'AK74',type:'shotting',url:'https://www.solware.co.uk/pub/media/catalog/product/cache/cce4c1006ad9f17ef9fef147db7a815d/0/0/003_ak-74_steel_bb_na.jpg'},
    {id:2,title:'Iskander',type:'missile system',url:'https://dfnc.ru/en/wp-content/uploads/2020/04/59bab431fc7e93d56c8b4568.jpg'},
    {id:3,title:'SU-30',type:'Aero',url:'https://upload.wikimedia.org/wikipedia/commons/7/76/Sukhoi_Su-30SM_in_flight_2014.jpg'},

  ]
  constructor(private post:PostComponent) { }

  ngOnInit(): void {
  }

}
