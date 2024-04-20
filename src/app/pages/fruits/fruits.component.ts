import { Component, OnInit, inject } from '@angular/core';
import { FruitService } from '../../services/fruit.service';
import { Fruits } from '../../utilities/models';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule,CardsComponent],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.scss'
})
export default class FruitsComponent implements OnInit {

  private fruitService = inject(FruitService);
  fruitsList : Array<Fruits> = []

  ngOnInit(){
      debugger;
      this.getFruitsData();
  }

  getFruitsData()
  {
    debugger;
    this.fruitService.getFruits()
    .subscribe({
      next: (Response)=>{
        this.fruitsList = Response.data;
        console.log("Data: ",this.fruitsList);
      },
      error:(error)=>{
        console.log("Error: ",error.message);
      }
    })
  }
}
