import { Component, OnInit } from '@angular/core';

import {Link} from "../Models/link.model";
import {LinksService} from "../Services/links.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {Router} from "@angular/router";


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  //Array attributes
  links:Link[] = [];

  //Show Modal Windows parameters
  visible:boolean=true;

  //pagination attributes
  totalLength:any;
  page:number = 1;
  length:number|undefined;

  //form container
  form:FormGroup|any;

  constructor(private link:LinksService,private router:Router) { }

  ngOnInit(): void {
    this.getLinks();
    this.formInit();
    this.getLength();
  }


  showModal(){
    this.visible = false;
  }


  hideModal(){
    this.visible = true;
  }


  getLinks():any{
   return  this.link.getData().subscribe((link:any)=>{
      this.links = link
      this.length = this.links.length
   })
  }

  getLength(){
    return this.link.getData().subscribe((item:any)=>{
      this.length = item.length
      console.log(this.length)
    })
  }

  formInit(){
    this.form = new FormGroup({
        title:new FormControl("",Validators.required),
        address:new FormControl("",Validators.required),
        image:new FormControl("",Validators.required),
        desc:new FormControl("",[Validators.required,Validators.minLength(20)])

    })
  }


  addLink(){
      const formData = {...this.form.value};
      console.log(formData)
      console.log(this.links)
     return  this.link.setData(formData).subscribe((item:any)=>{
        this.links.push(formData);
        this.visible = true;
        this.router.navigate(['/links'])
        this.form = new FormGroup({
         title:new FormControl("",Validators.required),
         address:new FormControl("",Validators.required),
         image:new FormControl("",Validators.required),
         desc:new FormControl("",[Validators.required,Validators.minLength(20)])

       })

     });
  }


  removeData(id:any){
    return this.link.reomveData(id).subscribe((item:any)=>{
      this.getLinks()
    })
  }

}
