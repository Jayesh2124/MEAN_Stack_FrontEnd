import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss'
})
export class MenuSidebarComponent {

}
