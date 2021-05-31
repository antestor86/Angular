import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArmsComponent } from "./arms/arms.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { PostsComponent } from "./posts/posts.component";
import { TemplateComponent } from "./template/template.component";
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'post',component:PostsComponent},
  {path:'arms',component:ArmsComponent},
  {path:'post/:id',component:PostComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AllRouterModule{

}


