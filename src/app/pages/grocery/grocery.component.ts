import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { BabiesProducts } from '../../utilities/models';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export default class GroceryComponent implements OnInit {

  private productService = inject(ProductsService);

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
}
