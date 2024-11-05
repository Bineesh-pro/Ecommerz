import { Routes } from '@angular/router';
import {ProductdetailComponent} from './components/productdetail/productdetail.component';
import {ProductsviewComponent} from './components/productsview/productsview.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {path:"product-details",component:ProductdetailComponent},
  {path:"products",component:ProductsviewComponent},
  {path:"home",component:HomeComponent},
  {path:"**",redirectTo:'home'},
];
