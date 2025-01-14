import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageDiffusionService {

  constructor(private http: HttpClient) { }


    private apiUrl="http://127.0.0.1:5000/generate-image"
    private apiUrl2 = 'http://127.0.0.1:5000/get-images-by-session';


    GenerateImages(Prompt: any): Observable<any> {
      return this.http.post(`${this.apiUrl}`, Prompt);
    }

    getImagesBySession(sessionId: string): Observable<any> {
      const params = new HttpParams().set('session_id', sessionId);
      return this.http.get(this.apiUrl2, { params });
    }
}
