import { Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CartComponent } from './pages/cart/cart.component';
import { VegetablesComponent } from './pages/vegetables/vegetables.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'login', pathMatch:'full' 
    },
    {
        path:'login', loadComponent: ()=> import('./pages/login/login.component')
    },
    {
        path:'register', loadComponent: ()=> import('./pages/register/register.component')
    },
    {
        path:'reset', loadComponent: ()=> import('./pages/reset/reset.component')
    },
    {
        path:'home', loadComponent: ()=> import('./pages/home/home.component'),
        children: [
            {
                path: '',
                component: CardsComponent
            },
            {
                path: 'veggies',
                component: VegetablesComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
        ]
    },
    {
        path:'forget_password', loadComponent: ()=> import('./pages/forget-password/forget-password.component')
    },
    {
        path:'reset/:token', loadComponent: ()=> import('./pages/reset/reset.component')
    },

];
