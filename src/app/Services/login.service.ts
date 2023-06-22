import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface loginDetails{
  userName:string;
  password:string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl ='https://fakestoreapi.com/';

  constructor(private http: HttpClient) { }

  login(loginDetails:loginDetails):Observable<loginDetails>{
    return this.http.post<loginDetails>(`${this.apiUrl}auth/login`,loginDetails);
  }
}
