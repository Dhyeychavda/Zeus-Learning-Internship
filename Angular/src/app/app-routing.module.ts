import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:'', pathMatch:'full', redirectTo:'/login'},
  {path:'dashboard', pathMatch:'full', redirectTo:'/dashboard'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
