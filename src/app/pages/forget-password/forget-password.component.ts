import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export default class ForgetPasswordComponent {

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  forgetPassForm !: FormGroup
  
  
  ngOnInit(): void {
    this.forgetPassForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  forgetPassword()
  {
    let userDetails = this.forgetPassForm.value
    console.log("ForgetPassword : ",userDetails)
    this.authService.sendEmailService(userDetails)
    .subscribe({
      next:(Response)=>{
        alert(Response.message);
        this.forgetPassForm.reset();
        this.router.navigate(['login']);
      },
      error:(err)=>{
        console.log(err.error.message);
      }
    })
  }
}
