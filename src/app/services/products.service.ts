import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Response } from '../utilities/api.models';
import { BabiesProducts, Fruits, Vegetables, productDetails } from '../utilities/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient)
  productDetails: productDetails = new productDetails()
  cartItemsArray : Array<any> = [];

  getAllGlossariesProducts(){
    return this.http.get<Response<BabiesProducts[]>>(`http://localhost:4000/api/Products/AllGlossaries`);
  }
  getAllBabiesProduct(){
    return this.http.get<Response<BabiesProducts[]>>(`http://localhost:4000/api/Products/AllBabiesProducts`);
  }
  getVeggies(){
    return this.http.get<Response<Vegetables[]>>(`http://localhost:4000/api/Products/AllVeggies`);
  }
  getFruits(){
    return this.http.get<Response<Fruits[]>>(`http://localhost:4000/api/Products/AllFruits`);
  }
  
}


export interface IProductItem {
  id: number,
  name: string,
  price: number,
  description:string
}