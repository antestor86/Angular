import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayotComponent } from './shared/components/main-layot/main-layot.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path:'',component:MainLayotComponent,children:[
    {path:'',redirectTo:'/',pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'post/:id',component:PostComponent}
  ]},
  {path:'error',component:ErrorPageComponent},
  {path:'**',redirectTo:'/error'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
