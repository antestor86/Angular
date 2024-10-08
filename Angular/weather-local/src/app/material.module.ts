import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

const modules = [MatIconModule,MatToolbarModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule]
@NgModule({
  declarations: [],
  imports: [modules],
  exports:[modules]
})
export class MaterialModule { }
