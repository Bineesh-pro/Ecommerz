import {ApplicationConfig, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemComponent} from './components/item/item.component';
import {ProductsviewComponent} from './components/productsview/productsview.component';
import {ProductService} from './service/product.service';
import {HttpClient, HttpClientModule, provideHttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemComponent, ProductsviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
