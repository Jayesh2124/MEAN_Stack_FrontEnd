import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface CartProduct {
  productId: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: CartProduct[] = [];
  public cartItemCount = new BehaviorSubject<number>(0);

  constructor() {}

  // Add product to cart
  addToCart(productId: string): void {
    const existingProduct = this.cartItems.find(item => item.productId === productId);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({ productId, quantity: 1 });
    }
    this.updateCartCount();
  }

  // Remove product from cart
  removeFromCart(productId: string): void {
    const productIndex = this.cartItems.findIndex(item => item.productId === productId);
    if (productIndex > -1) {
      this.cartItems.splice(productIndex, 1);
      this.updateCartCount();
    }
  }

  // Get cart items count as observable
  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  // Update cart count
  private updateCartCount(): void {
    const count = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.cartItemCount.next(count);
  }
}
