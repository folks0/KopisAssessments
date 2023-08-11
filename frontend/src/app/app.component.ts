import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Restuarant';
  cartItemCount: number = 0; // Initialize cart item count

  constructor() {}

  ngOnInit(): void {
    // Get Cart Number
  }

  goToCart() {
    // Navigate to cart page
  }
}
