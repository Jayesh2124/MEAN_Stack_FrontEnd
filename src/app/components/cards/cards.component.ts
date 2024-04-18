import { Component,Input, inject } from '@angular/core';
import { Vegetables } from '../../utilities/models';
import { CommonModule } from '@angular/common';
import { VeggiesServiceService } from '../../services/veggies-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  @Input({required:true}) veggies!: Vegetables
}
