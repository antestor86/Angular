import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HostComponent } from './host/host.component';
import { HostsComponent } from './hosts/hosts.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  {path:'hosts',component:HostsComponent},
  {path:'other',component:OtherComponent},
  {path:'host/:editMode/:id',component:HostComponent},
  {path:'host/:viewMode/:id',component:HostComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
