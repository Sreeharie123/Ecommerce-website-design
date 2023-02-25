import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './component/dashbord/dashbord.component';

const routes: Routes = [
  {path:"home",component:DashbordComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
