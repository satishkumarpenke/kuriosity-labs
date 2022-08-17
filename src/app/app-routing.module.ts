import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {
    path:'',
    component: FrontPageComponent
  },
  {
    path:'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
