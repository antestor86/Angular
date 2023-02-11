import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { LiveService } from '../services/live.service';
import { Source } from '../interfaces/source.interface';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  images$!:Observable<Source[]>
  filterImages:Source[] = []
  totalLength:any=3;
  page:number = 1;
  length!:number;
  isReadMore =true;
  width:number = 500;
  elWidth = this.width + 'px';
  searchValue:string="";
  clickStatuss:boolean = false;
  constructor(private data:LiveService) { }

  ngOnInit(): void {
    this.getData();
    this.getLength();
    this.filterGifs()
  }

  getData():void{
    this.images$ = this.data.getData().pipe(tap(data => data))
  }

  getLength(){
    this.data.getData().pipe(
      tap((data:any)=>{
        this.length = data.length
      })
    )
  }

  filterGifs(){

  }

  showMore(){
    //this.isReadMore = !this.isReadMore
    this.width=this.width+500;
    this.elWidth = this.width + 'px'
    console.log(this.elWidth)

  }

  hide(){
    if(this.width >= 500){
      this.width=this.width-500;
      this.elWidth = this.width + 'px'
      console.log(this.elWidth)
    }
    else{
      this.width = 500
    }

  }

  onSubmit(value:any){
    this.filterImages = [];
     this.clickStatuss = true;
     this.searchValue = value.form.value.input;
     this.data.getData().subscribe((item:any)=>{
      this.filterImages = item.filter((data:any)=>data.title.includes(this.searchValue))
      console.log(this.filterImages)
    })
  }

}
