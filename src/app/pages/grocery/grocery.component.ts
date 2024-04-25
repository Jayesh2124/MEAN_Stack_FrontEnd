import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { BabiesProducts, productDetails } from '../../utilities/models';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export default class GroceryComponent implements OnInit {

  private productService = inject(ProductsService);
  private router = inject(Router)

  babiesProductList: Array<BabiesProducts> = []
  openTab = 1;

  ngOnInit(): void {
    this.toggleTabs(1);
    this.getAllBabiesProducts();

  }
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
  getAllBabiesProducts() {
    this.productService.getBabiesProducts()
      .subscribe({
        next: (Response: any) => {
          this.babiesProductList = Response.data;
        },
        error: (error: Error) => {
          console.log("Error: ", error.message);
        }
      })
  }

  viewMore(productData : BabiesProducts){
    debugger;
    let details : productDetails = {
      productName : productData.product,
      price : productData.price,
      ingredients : productData.ingredients,
      volume: productData.volume,
      imgSrc : `../../../assets/${productData.product}.jpg`
    }
    this.productService.productDetails = details
    this.router.navigate(['home/Product']);

  }
}
