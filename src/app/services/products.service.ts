import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Response } from '../utilities/api.models';
import { BabiesProducts } from '../utilities/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient)

  getBabiesProducts(){
    return this.http.get<Response<BabiesProducts[]>>(`http://localhost:4000/api/BabiesProducts/GetAllBabiesProduct`);
  }
  
}
