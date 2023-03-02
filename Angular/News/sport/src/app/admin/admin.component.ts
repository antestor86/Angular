import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form!:FormGroup
  constructor(private router:Router,private data:DataService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
        title:new FormControl(null,Validators.required),
        theme:new FormControl(null,Validators.required),
        date:new FormControl(null,Validators.required),
        url:new FormControl(null,Validators.required),
        source:new FormControl(null,Validators.required),
        text:new FormControl(null,Validators.required),
        secondsource:new FormControl(null,Validators.required),
        category:new FormControl(null,Validators.required)
    })


}

addArticle(){

}

inSubmit(){
    this.router.navigate(['/'])
    console.log(this.form.value)
}



}
