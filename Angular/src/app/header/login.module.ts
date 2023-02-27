import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginComponentComponent
  ],
  imports: [
    CommonModule, LoginRoutingModule
  ],
  exports: [
    LoginComponentComponent
  ]
})
export class LoginModule { }
