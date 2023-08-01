import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  apiUrl =environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategories():Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}products/categories`);
  }

  
}
