import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponentComponent } from './component/dashboard-component/dashboard-component.component';


@NgModule({
  declarations: [
    DashboardComponentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponentComponent
  ]
})
export class DashboardModule { }
