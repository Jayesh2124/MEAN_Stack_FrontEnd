import { Component,Input, inject } from '@angular/core';
import {  Vegetables, productDetails } from '../../utilities/models';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input({required:true}) veggies!: Vegetables
  
  private productService = inject(ProductsService);
  private cartService = inject(CartService);
  private router = inject(Router)

  viewProduct(productData : any ){
    debugger;
    let details : productDetails = {
      productName : productData.name,
      price : productData.price_per_kg,
      ingredients : productData.nutrients,
      volume: "Per Kg",
      imgSrc : `../../../assets/vegetables/${productData.name}.jpg`
    }
    this.productService.productDetails = details
    this.router.navigate(['home/Product']);

  }

  addToCart(product: any)
  {
    product.src = `../../../assets/vegetables/${product.name}.jpg`
    this.cartService.addToCart(product);
  }
}
