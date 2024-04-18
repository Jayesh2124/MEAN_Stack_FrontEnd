import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Response } from '../utilities/api.models'
import { Vegetables } from '../utilities/models';
@Injectable({
  providedIn: 'root'
})
export class VeggiesServiceService {

  private http = inject(HttpClient);
  
  getVeggies(){
    return this.http.get<Response<Vegetables[]>>(`http://localhost:4000/api/veggies/Vegetables`);
  }
}
