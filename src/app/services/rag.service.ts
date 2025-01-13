import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RagService {

  private apiUrl="http://localhost:5000"

  constructor(private http: HttpClient) { }

  start_session(userData: { user_id: string }) {
    const url = `${this.apiUrl}/start_session`;

    // Ajoutez des en-têtes explicites
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(url, userData, { headers });
  }
  
  ASK(data: { session_id: string; question: string }) {
    const url = `${this.apiUrl}/ask`;
  
    // Définir les en-têtes pour JSON
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    // Envoyer la requête POST avec les données
    return this.http.post(url, data, { headers });
  }


}
