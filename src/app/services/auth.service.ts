import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrls } from '../api.urls'
import { User } from '../utilities/models';
import { Response } from '../utilities/api.models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  registerService(registerObj : any)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}Register`,registerObj);
  }

  loginService(loginInfo: any)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}Login`,loginInfo);
  }

  sendEmailService(email:string)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}send-email`, email);
  }

  resetPasswordService(resetObject:any)
  {
    return this.http.post<any>(`${apiUrls.authServiceApi}reset-password`, resetObject);
  }

  getUserDetialsByEmailId(email:string)
  {
    return this.http.get<Response<User>>(`http://localhost:4000/api/user/getUserByEmail/${email}`)
  }
}
