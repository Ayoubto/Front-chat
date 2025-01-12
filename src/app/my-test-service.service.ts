import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyTestServiceService {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/your-endpoint`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/your-endpoint`, data);
  }
  getMessage(): string {
    return 'Hello from MyTestService!';
  }
}
