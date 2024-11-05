import { Component } from '@angular/core';
import {Product} from '../../model/product';
import {CurrencyPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {Review} from '../../model/review';
import {NavbarHeaderComponent} from '../navbar-header/navbar-header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton,
    NavbarHeaderComponent,
    FooterComponent
  ],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {

  product?:Product;

  reviews:Array<Review> = new Array<Review>();

  constructor() {
    this.reviews.push(new Review("Bineesh","Nice Product","I am beyond impressed with this purchase! The quality exceeded my expectations, and it looks and feels even better in person. It’s incredibly well-made and durable, which makes me feel like I got amazing value for the price. I also appreciate the attention to detail in the design—clearly, a lot of thought went into this product. Highly recommend to anyone considering it!",4.8,"Nov 5 2024"));
    this.reviews.push(new Review("Hafeez Mohammed","Nice Product","This has quickly become my favorite! It’s so easy to use, and it saves me so much time every day. I love how intuitive the design is; I didn't even need to read the instructions to get started. It’s clear that a lot of work went into making this user-friendly and effective. Five stars from me, and I’ll definitely be purchasing from this brand again!",4.2,"Nov 5 2024"));
    this.reviews.push(new Review("Harsha","Nice Product","This has quickly become my favorite! It’s so easy to use, and it saves me so much time every day. I love how intuitive the design is; I didn't even need to read the instructions to get started. It’s clear that a lot of work went into making this user-friendly and effective. Five stars from me, and I’ll definitely be purchasing from this brand again!",4.9,"Nov 5 2024"));
    this.reviews.push(new Review("Aswath Kumar","Nice Product","I was a bit skeptical at first, but I’m so glad I decided to give it a try. The performance is outstanding, and it does exactly what it promises, if not more. I’ve been using it for a few weeks now, and I can honestly say it’s made a big difference. The customer service team was also super helpful when I had a question, which only adds to the great experience. Worth every penny!",4.7,"Nov 5 2024"));
    this.reviews.push(new Review("Jessi","Nice Product","Absolutely love this! It arrived on time, well-packaged, and in perfect condition. The craftsmanship is impeccable, and it has quickly become an essential part of my routine. It’s stylish, practical, and I constantly get compliments on it. I would definitely recommend this to friends and family, and I’m even considering buying another as a gift. Couldn’t be happier with my purchase!",4.8,"Nov 5 2024"));
    this.reviews.push(new Review("Srinivasan","Nice Product","I can’t say enough good things about this product! From the moment I started using it, I could tell it was made with top-notch materials. It’s comfortable, efficient, and does exactly what I need. I’ve tried similar products before, but this one stands out in every way. I honestly feel like it’s improved my day-to-day life, and I’m so pleased with the results. Definitely worth buying!",4.6,"Nov 5 2024"));
  }
}
