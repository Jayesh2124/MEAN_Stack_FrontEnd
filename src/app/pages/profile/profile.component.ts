import { Component, OnInit, inject } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { AuthService } from '../../services/auth.service';
import { User } from '../../utilities/models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export default class ProfileComponent implements OnInit{

  private authSerive = inject(AuthService);
  emailAddress: string = ''
  userDetails : User = new User();

  ngOnInit(): void {
    debugger;
    let currentUser : any = JSON.parse(localStorage.getItem("Green-mart-User") || '')  
    this.emailAddress = currentUser.emails
    this.getUserDetailsByEmail(this.emailAddress);
    
    
  }
  getUserDetailsByEmail(email:string)
  {
    this.authSerive.getUserDetialsByEmailId(email)
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
