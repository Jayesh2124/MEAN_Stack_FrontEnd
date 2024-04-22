import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent implements OnInit{
  
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  loginForm !: FormGroup
  
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required]
    })
  }

  login()
  {
    let userDetails = this.loginForm.value
    this.authService.loginService(userDetails)
    .subscribe({
      next:(Response)=>{
        alert("login Successful..!");
        console.log("UserDetails", Response);
        
        localStorage.setItem("Green-mart-User",JSON.stringify(Response.data));
        this.router.navigate(['home']);
      },
      error:(err)=>{
        console.log(err)
        alert(err.error.message);
      }
    })
  }
}
