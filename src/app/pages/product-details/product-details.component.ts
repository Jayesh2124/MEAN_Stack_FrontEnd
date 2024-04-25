import { Component, OnInit, inject } from '@angular/core';
import { productDetails } from '../../utilities/models';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export default class ProductDetailsComponent implements OnInit {

  viewProductDetails: productDetails = new productDetails()
  productService = inject(ProductsService)
  counter: number = 1

  ngOnInit(): void {
    this.viewProductDetails = this.productService.productDetails
    this.swipeCards()
  }

  counterMethod(operation: string) {
    this.counter = this.counter > 0 ? (operation == 'increment' ? ++this.counter : (this.counter > 1 ? --this.counter : 1)) : 1;
  }
  

  swipeCards() {
    return {
      cards: [
        {
          id: 1,
          image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Cocktail')}`,
          title: 'Cocktail',
          description: 'Tropical mix of flavors, perfect for parties.',
          price: 8.99,
          link: 'https://lqrs.com'
        },
        {
          id: 2,
          image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Smoothie')}`,
          title: 'Smoothie',
          description: 'Refreshing blend of fruits and yogurt.',
          price: 5.49,
          link: 'https://lqrs.com'
        },
        {
          id: 3,
          image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Iced Coffee')}`,
          title: 'Iced Coffee',
          description: 'Cold brewed coffee with a hint of vanilla.',
          price: 4.99,
          link: 'https://lqrs.com'
        },
        {
          id: 4,
          image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Mojito')}`,
          title: 'Mojito',
          description: 'Classic Cuban cocktail with mint and lime.',
          price: 7.99,
          link: 'https://lqrs.com'
        },
        {
          id: 5,
          image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Matcha Latte')}`,
          title: 'Matcha Latte',
          description: 'Creamy green tea latte, rich in antioxidants.',
          price: 6.49,
          link: 'https://lqrs.com'
        },
        {
          id: 6,
          image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Fruit Punch')}`,
          title: 'Fruit Punch',
          description: 'Sweet and tangy punch, bursting with fruity flavors.',
          price: 3.99,
          link: 'https://lqrs.com'
        },
        {
          id: 7,
          image: `https://source.unsplash.com/random/300x200?${encodeURIComponent('Bubble Tea')}`,
          title: 'Bubble Tea',
          description: 'Chewy tapioca pearls in a sweet milk tea base.',
          price: 4.99,
          link: 'https://lqrs.com'
        }
      ],
      addToCart(product: any) {
        // Implement your add to cart logic here
        console.log('Adding to cart:', product);
      }
    };
  }

}
