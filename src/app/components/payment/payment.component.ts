import { Component } from '@angular/core';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    LottieComponent
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  lott_options:AnimationOptions={
    path: 'pay_success.json',
    loop: false,
    autoplay: true
  }

}
