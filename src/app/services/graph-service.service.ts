import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphServiceService {

  constructor( private http: HttpClient) { }
    private apiUrl="http://127.0.0.1:5000//visualize"
    
    submitData(edges: number[][], initial_infected: number[], node_thresholds: { [key: string]: number }): Observable<any> {
      const data = { edges, initial_infected, node_thresholds };
      return this.http.post<any>(this.apiUrl, data);
    }
}
