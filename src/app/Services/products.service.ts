import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl =environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.apiUrl}products`);
  }
}
