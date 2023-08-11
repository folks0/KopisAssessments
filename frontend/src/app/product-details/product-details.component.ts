import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  cart: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Get API for Product Id
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService
      .getProduct(productId ?? '')
      .subscribe((content: any) => {
        this.product = content.data;
      });
  }

  addToCart(product: any) {}

  goToCart() {}
}
