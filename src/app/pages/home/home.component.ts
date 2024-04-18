import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { VeggiesServiceService } from '../../services/veggies-service.service';
import { CardsComponent } from '../../components/cards/cards.component';
import { Vegetables } from '../../utilities/models';
import { MenuSidebarComponent } from '../../modules/menu-sidebar/menu-sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule, CardsComponent, MenuSidebarComponent,FooterComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent  {

  

  
}


