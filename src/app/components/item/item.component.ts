import {Component, Input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Product} from '../../model/product';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    MatButton,
    CurrencyPipe
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input()product?:Product;

}
