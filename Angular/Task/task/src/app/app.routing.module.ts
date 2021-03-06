import { InsertComponent } from './insert/insert.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'insert',component:InsertComponent},
  {path:'users/:id',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
