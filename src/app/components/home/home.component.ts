import { Component } from '@angular/core';
import {NavbarHeaderComponent} from '../navbar-header/navbar-header.component';
import {FooterComponent} from '../footer/footer.component';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarHeaderComponent,
    FooterComponent,
    MatButton,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
