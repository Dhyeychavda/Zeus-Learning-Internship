import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { HeaderRoutingModule } from './header-routing.module';



@NgModule({
  declarations: [
    HeaderComponentComponent
  ],
  imports: [
    CommonModule, HeaderRoutingModule
  ],
  exports: [
    HeaderComponentComponent
  ]
})
export class HeaderModule { }
