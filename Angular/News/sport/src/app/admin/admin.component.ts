import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '../interfaces/article.interface';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form!:FormGroup;
  articles:Article[] = []

  constructor(private router:Router,private data:DataService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
        title:new FormControl(null,Validators.required),
        date:new FormControl(null,Validators.required),
        url:new FormControl(null,Validators.required),
        source:new FormControl(null,Validators.required),
        text:new FormControl(null,Validators.required),
        otherUrl:new FormArray([new FormControl]),
        category:new FormControl(null,Validators.required),
        video:new FormControl(null)
    })
}

onAddInput(){
    const control = new FormControl('');
    (<FormArray>this.form.get('otherUrl')).push(control)
    //(this.form.get('otherUrl')as FormArray).push(control)
}

addArticle(){
    const formdata = {...this.form.value};
    this.data.setData(formdata).subscribe(item=>{
      console.log(item)
    })
}

inSubmit(){
    this.router.navigate(['/'])
    this.addArticle();
    //console.log(this.form.value)
}



}
