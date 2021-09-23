import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Movie } from '../main/main.component';



@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  @Input()display:boolean=false
  addForm:FormGroup|any;
  movies:Movie[]|any;

  constructor(private http:DataService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.addForm = new FormGroup({
      title:new FormControl('',[Validators.required]),
      year:new FormControl(null,[Validators.required,Validators.minLength(4)]),
      rate:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern("^[0-9]*$")]),
      desc:new FormControl('',[Validators.required]),
      genre:new FormControl('',Validators.required),
      poster:new FormControl('',[Validators.required]),
      link:new FormControl('',Validators.required)

    })
  }
    submit(){
      const formData = {...this.addForm.value};
      console.log(formData)
      this.http.setData(formData).subscribe((data: any)=>{
        this.movies.push(data)
      })

    }

    hideBlock(){
      this.display = false;
    }



}
