import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Vegetables } from '../../utilities/models';
import { CardsComponent } from '../../components/cards/cards.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss'
})
export default class VegetablesComponent implements OnInit{

  private productService = inject(ProductsService);
  veggiesList : Vegetables[] = [];

  ngOnInit(): void {
    this.productService.getVeggies()
    .subscribe({
      next:(Response)=>{
        console.log(Response);
        console.log(Response.data);
        this.veggiesList = Response.data;
      },
      error:(Err)=>{
        console.error("Server Error :", Err.message);
        alert( Err.message);
      }
    })
}
}
