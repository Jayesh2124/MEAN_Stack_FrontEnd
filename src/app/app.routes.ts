import { Routes } from '@angular/router';

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
        path:'home', loadComponent: ()=> import('./pages/home/home.component')
    },
    {
        path:'forget_password', loadComponent: ()=> import('./pages/forget-password/forget-password.component')
    },
];
