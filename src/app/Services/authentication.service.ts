import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';




class User {
  id!: number;
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  token!: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  apiUrl ='https://fakestoreapi.com/';

  //private currentUserSubject: BehaviorSubject<string>;
  //public currentUser: Observable<string>;

  constructor(private http:HttpClient) {
    //this.currentUserSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('token')||""));
  // this.currentUser = this.currentUserSubject.asObservable();
  }
  
  //  public get currentUserValue(): string {
  //   return this.currentUserSubject.value;
  // }

  login(username: string,password: string):Observable<{username: string,password: string}>{
   
    return this.http.post<any>(this.apiUrl+'auth/login', { username, password })
    .pipe(map(token => {
      localStorage.setItem('token', JSON.stringify(token));
      return token;
    }));
  }

  gettoken(){
    let token:string;
    token =JSON.parse(localStorage.getItem('token')|| "");
    return token;
  }

}
