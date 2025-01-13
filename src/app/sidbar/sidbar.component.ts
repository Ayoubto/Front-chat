import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RagService } from '../services/rag.service';
@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrl: './sidbar.component.css'
})
export class SidbarComponent {
  constructor(public router: Router,private RagService: RagService) {}

  response:any

  AllHistory() {
   
    const userData = {
      user_id:"67830f1c96a5ad472a6ff413"
    }
    console.log('Corps de la requête envoyé à l’API :', userData);
    this.RagService.AllHistory(userData.user_id).subscribe(
      (data:any) => {
        
        this.response = data["history"][1]; // Stockez la réponse
        console.log('Session démarrée avec succès :', data);
        
        
        
        
      },
      (error) => {
        console.error('Erreur lors du démarrage de la session :', error);
      }
    );
  }

}
