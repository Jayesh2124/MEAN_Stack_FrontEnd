import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../validators/confirm.password.validator';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent implements OnInit {

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router)
  registerForm !: FormGroup

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
      {
        validator: confirmPasswordValidator('password', 'confirmPassword')
      });
  }

  register() {
    debugger;
    let registerValues = this.registerForm.value
    this.authService.resetPasswordService(registerValues)
    .subscribe({
      next:(Res)=>{
        alert("Password is Reset Created..!");
        this.registerForm.reset();
        this.router.navigate(['login']);
      },
      error:(err)=>{
        console.log(err);
      }
      })
  }

}
