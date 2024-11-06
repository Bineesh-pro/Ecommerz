import { Routes } from '@angular/router';
import {ProductdetailComponent} from './components/productdetail/productdetail.component';
import {ProductsviewComponent} from './components/productsview/productsview.component';
import {HomeComponent} from './components/home/home.component';
import {CheckoutComponent} from './components/checkout/checkout.component';

export const routes: Routes = [
  {path:"product-details/:productId",component:ProductdetailComponent},
  {path:"products",component:ProductsviewComponent},
  {path:"home",component:HomeComponent},
  {path:"checkout/:productId",component:CheckoutComponent},
  {path:"**",redirectTo:'home'},
];
