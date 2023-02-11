import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Branch } from '../interfaces/branches.interface';
import { Observable } from 'rxjs';
import { OtherService } from '../services/other.service';
import {Find} from "../interfaces/find.interface";



@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  regions$!: Observable<String[]>;
  branches$!: Observable<Branch[]>;
  os = [
    "Windows 10 Enterprise",
    "Windows 10 Enterprise LTSC",
    "Windows 11",
    "WIndows 10 Etreprise LTSB"

  ]
   form!: FormGroup;

  constructor(private otherService: OtherService) { }

    @Output()getMessage = new EventEmitter<Find>();

  ngOnInit(): void {
    this.formInit()
    this.getData();
    this.getBranches()
  }

  getData(): void {
    this.regions$ = this.otherService.getRegion();
  }

  getBranches(): void {
    this.branches$ = this.otherService.getBranch();
  }



  formInit() {
    this.form = new FormGroup({
      types: new FormGroup({
        region: new FormControl('', Validators.required),
        branch: new FormControl('', Validators.required),
        os: new FormControl('', Validators.required)
      })

    })
  }

  submit(value:Find):void {
      this.getMessage.emit(value);
     // console.log(value)
  }
}
