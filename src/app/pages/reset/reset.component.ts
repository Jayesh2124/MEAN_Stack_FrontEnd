import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { confirmPasswordValidator } from '../../validators/confirm.password.validator';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export default class ResetComponent implements OnInit {

  resetForm !: FormGroup

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute)
  token : string = ''
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( val =>{
      this.token = val['token'];
      console.log("token",this.token)
    })
    this.resetForm = this.fb.group({
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    },
    {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    });
  }

  resetPassword(){
    debugger;
    let resetObj = {
      token : this.token,
      password : this.resetForm.value.password
    }

    this.authService.resetPasswordService(resetObj).subscribe(
      {
        next:(Response)=>{
          alert(Response.message);
          this.resetForm.reset();
          this.router.navigate(['login']);
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
    
  }
}
