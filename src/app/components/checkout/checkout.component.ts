import {Component, inject, OnInit} from '@angular/core';
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NavbarHeaderComponent} from '../navbar-header/navbar-header.component';
import {FooterComponent} from '../footer/footer.component';
import {CurrencyPipe} from '@angular/common';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {MatDialog} from '@angular/material/dialog';
import {PaymentComponent} from '../payment/payment.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatHint,
    NavbarHeaderComponent,
    FooterComponent,
    CurrencyPipe,
    MatRadioGroup,
    MatRadioButton
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{

  gst:number=1.08;
  product?:Product;
  productId?:string | null;
  totalPrice:number=this.gst;
  dialog = inject(MatDialog);

  constructor(private route:ActivatedRoute,private productsSerice:ProductService) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.productsSerice.getProduct(this.productId)
      .subscribe(p => {
        this.product = p;
        this.totalPrice += p.price;
      })
  }

  openPaymentSuccessDialog(){
      this.dialog.open(PaymentComponent);
  }



}
