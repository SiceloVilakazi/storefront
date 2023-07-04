import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl ='https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  addToCart(product:any[],userID:number):Observable<any[]>{
    let date:string="2020-02-03";
    userID=5;
    
    return this.http.post<any[]>(`${this.apiUrl}carts`,{userID,date,product});
  } 


  getCartItems(){
    return this.http.get<any[]>(`${this.apiUrl}carts/2`);
  }
}
