import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css'
})
export class NavbarHeaderComponent {

}
