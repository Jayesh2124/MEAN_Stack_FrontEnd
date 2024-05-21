import { Component, inject , OnInit} from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  private cartServices = inject(CartService);
  totalPrice: number = 100
  constructor( ) {}

  ngOnInit(): void {
    this.cartItems = this.cartServices.cartItems
    console.log(this.cartItems);
  }

  removeFromCart(productId: string): void {
    this.cartServices.removeFromCart(productId);
  }

  addToCart(product: any): void {
    debugger;
    this.cartServices.addToCart(product);
  }
}

