import { Component, OnInit, inject } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { AuthService } from '../../services/auth.service';
import { User } from '../../utilities/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export default class ProfileComponent implements OnInit{

  private authService = inject(AuthService);
  emailAddress: string = '';

  mode: string = 'profile';

  userDetails : User = new User();

  ngOnInit(): void {
    debugger;
    let currentUser : any = JSON.parse(localStorage.getItem("Green-mart-User") || '')  
    this.emailAddress = currentUser.emails
    this.getUserDetailsByEmail(this.emailAddress);
    
  }

  getUserDetailsByEmail(email:string)
  {
    this.authService.getUserDetialsByEmailId(email)
    .subscribe({
      next:(Response)=>{
        if(Response.success)
          this.userDetails = Response.data
        console.log("UserData ",this.userDetails)
      },
      error:(err)=>{
        console.log(err.message);
      }
    })
  }
}
