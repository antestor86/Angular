import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'task_one',component:TaskOneComponent},
  {path:'task_two',component:TaskTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
