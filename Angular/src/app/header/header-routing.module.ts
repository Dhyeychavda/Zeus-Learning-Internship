import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponentComponent } from './component/header-component/header-component.component';


const routes: Routes = [
    { path: 'login', component: HeaderComponentComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class HeaderRoutingModule {

}