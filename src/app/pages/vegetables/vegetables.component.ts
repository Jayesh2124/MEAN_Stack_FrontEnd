import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { VeggiesServiceService } from '../../services/veggies-service.service';
import { Vegetables } from '../../utilities/models';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-vegetables',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './vegetables.component.html',
  styleUrl: './vegetables.component.scss'
})
export default class VegetablesComponent implements OnInit{

  private veggiesService = inject(VeggiesServiceService);
  veggiesList : Vegetables[] = [];

  ngOnInit(): void {
    this.veggiesService.getVeggies()
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
