import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl =environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}users/${id}`);
  }


}
