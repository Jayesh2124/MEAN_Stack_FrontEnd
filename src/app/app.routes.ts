import { Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { CartComponent } from './pages/cart/cart.component';

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
                path: 'Dashboard',
                loadComponent: ()=> import('./pages/dashboard/dashboard.component')
            },
            {
                path: 'Veggies',
                loadComponent: ()=> import('./pages/vegetables/vegetables.component'),
            },
            {
                path: 'Fruits',
                loadComponent: ()=> import('./pages/fruits/fruits.component'),
            },
            {
                path: 'Grocery',
                loadComponent: ()=> import('./pages/grocery/grocery.component'),
            },
            {
                path: 'Profile',
                loadComponent: ()=> import('./pages/profile/profile.component'),
            },
            {
                path: 'Product',
                loadComponent: ()=> import('./pages/product-details/product-details.component'),
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
