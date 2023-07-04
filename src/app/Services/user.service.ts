import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl ='https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  getUser(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}users/${id}`);
  }


}