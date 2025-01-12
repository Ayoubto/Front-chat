import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl="http://localhost:8080/api/users"
  private apiUrl2 = 'http://localhost:8080/welcom';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }
  getWelcomeMessage(): Observable<any> {
    return this.http.get(this.apiUrl2);
  }

  signin() {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      email: "test11112222211@gmail.com",
      password: "Strong123@"
    };

    this.http.post(this.apiUrl, userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(
      data => console.log('Sign-in successful:', data),
      error => console.error('Sign-in failed:', error)
    );
  }
}
