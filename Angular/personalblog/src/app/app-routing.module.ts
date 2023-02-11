import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {LinksComponent} from "./links/links.component";
import {PlansComponent} from "./plans/plans.component";
import {CalculatorComponent} from "./calculator/calculator.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'article',component:ArticleComponent},
  {path:'links',component:LinksComponent},
  {path:'plans',component:PlansComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'**',pathMatch:'full',redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
