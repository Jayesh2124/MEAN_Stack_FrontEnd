import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CardsComponent } from '../../components/cards/cards.component';
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
export default class HomeComponent implements OnInit  {

  private router = inject(Router);


  ngOnInit(): void {
    debugger;
    if(this.router.url  === '/home/' || this.router.url  === '/home' )
      {
        this.router.navigate(["/home/Dashboard/"]);
      }
  }

  
}


