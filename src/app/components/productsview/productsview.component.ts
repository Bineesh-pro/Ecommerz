import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ItemComponent} from '../item/item.component';
import {NavbarHeaderComponent} from '../navbar-header/navbar-header.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-productsview',
  standalone: true,
  imports: [
    ItemComponent,
    NavbarHeaderComponent,
    MatButton
  ],
  templateUrl: './productsview.component.html',
  styleUrl: './productsview.component.css'
})
export class ProductsviewComponent implements OnInit{

  products?:Product[];

  constructor(private productsService:ProductService) {

  }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(p => {
        this.products = p;
      })
  }

}
