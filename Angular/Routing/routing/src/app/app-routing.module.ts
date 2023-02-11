import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AdminpageComponent } from "./adminpage/adminpage.component";
import { ExtraComponent } from "./extra/extra.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PhonesComponent } from "./phones/phones.component";
import { PostComponent } from "./post/post.component";
import { RegisterComponent } from "./register/register.component";

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent,children:[
    {path:'extra',component:ExtraComponent}
  ]},
  {path:'posts',component:PhonesComponent},
  {path:'posts/:id',component:PostComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminpageComponent}

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class  AppRoutingModule{

}
