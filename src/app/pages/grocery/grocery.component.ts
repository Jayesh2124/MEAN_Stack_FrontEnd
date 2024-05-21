
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export default class GroceryComponent implements OnInit {

  private productService = inject(ProductsService);
  private router = inject(Router)

  babiesProductList: Array<any> = []
  openTab = 1;

  ngOnInit(): void {
    this.toggleTabs(1);
  }
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
    if (this.openTab == 1) {
      this.getAllBabiesProduct();
    }
    if (this.openTab == 3) {
      this.getAllGroceries();
    }
  }
  getAllGroceries() {
    this.productService.getAllGlossariesProducts()
      .subscribe(
        {
          next: (Response: any) => {
            this.babiesProductList = Response.data;
            console.log("Gros Products ", this.babiesProductList);
          },
          error: (error: Error) => {
            console.log("Error: ", error.message);
          }
        })
  }
  getAllBabiesProduct() {
    this.productService.getAllBabiesProduct()
      .subscribe(
        {
          next: (Response: any) => {
            this.babiesProductList = Response.data;
            console.log("Gros Products ", this.babiesProductList);
          },
          error: (error: Error) => {
            console.log("Error: ", error.message);
          }
        })
  }

  viewMore(productData: any) {
    debugger;
    let details: any = {
      productName: productData.product,
      price: productData.price,
      ingredients: productData.ingredients,
      volume: productData.volume,
      imgSrc: `../../../assets/${productData.product}.jpg`
    }
    this.productService.productDetails = details
    this.router.navigate(['home/Product']);

  }
}
