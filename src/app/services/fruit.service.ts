import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Fruits } from '../utilities/models';
import { Response } from '../utilities/api.models'

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private http = inject(HttpClient);
  
  getFruits(){
    return this.http.get<Response<Fruits[]>>(`http://localhost:4000/api/fruits/getAllFruits`);
  }
  
}
