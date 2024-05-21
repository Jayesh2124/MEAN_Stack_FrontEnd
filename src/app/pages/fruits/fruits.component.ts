import { Component, OnInit, inject } from '@angular/core';
import {  Vegetables } from '../../utilities/models';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule,CardsComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export default class FruitsComponent implements OnInit {

  private productService = inject(ProductsService);
  fruitsList : Array<Vegetables> = []

  ngOnInit(){
      debugger;
      this.getFruitsData();
  }

  getFruitsData()
  {
    debugger;
    this.productService.getFruits()
    .subscribe({
      next: (Response)=>{
        this.fruitsList = Response.data as [];
        console.log("Data: ",this.fruitsList);
      },
      error:(error)=>{
        console.log("Error: ",error.message);
      }
    })
  }
}
