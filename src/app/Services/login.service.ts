import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

interface loginDetails{
  userName:string;
  password:string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl =environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(loginDetails:loginDetails):Observable<loginDetails>{
    return this.http.post<loginDetails>(`${this.apiUrl}auth/login`,loginDetails);
  }
}
