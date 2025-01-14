import { Component } from '@angular/core';
import { ImageDiffusionService } from '../services/image-diffusion.service';
import { HttpHeaders } from '@angular/common/http';
import { RagService } from '../services/rag.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-generate-image',
  templateUrl: './generate-image.component.html',
  styleUrl: './generate-image.component.css'
})
export class GenerateImageComponent {
   constructor(private RagService: RagService,private jwtHelper: JwtHelperService,private router: Router, private ImageDiffusionService:ImageDiffusionService) {}
  showAll:boolean=false
  id:string="zze666zv4bdzd6rur"
  response:any
  Userprompt: string = '';
   startSession() {
   
    const userData = {
      user_id:this.id
    }
    console.log('Corps de la requête envoyé à l’API :', userData);
    this.RagService.start_session(userData).subscribe(
      (data:any) => {
        
        this.response = data; // Stockez la réponse
        console.log('Session démarrée avec succès :', data["session_id"]);
        
        
      },
      (error) => {
        console.error('Erreur lors du démarrage de la session :', error);
      }
    );
  }

  imageBase64:any
  generateImage(){
    this.startSession()
    const userData = {
      prompt:this.Userprompt,
      class_guidance:7,
      num_imgs:1,
      seed:11,
      session_id:"hshd55dtde5d5detde6tde6dt"
    }

    console.log('Corps de la requête envoyé à l’API :', userData);
    this.ImageDiffusionService.GenerateImages(userData).subscribe(
      (data:any) => {
        
        this.response = data; // Stockez la réponse
        console.log('Session démarrée avec succès :', data);
        this.imageBase64 = `data:image/jpeg;base64,${data.image_base64}`;
        this.showAll=true
        this.getAllImage()
        this.showAll=true
             
      },
      (error:any) => {
        console.error('Erreur lors du démarrage de la session :', error);
      }
    );

  }

  images:any
  getAllImage(){
    const sessionId = 'hshd55dtde5d5detde6tde6dt'; // Remplacez par votre session_id
    this.ImageDiffusionService.getImagesBySession(sessionId).subscribe({
      next: (data) => {
        this.images = data["images"];
        console.log('Images fetched:', data["images"]);
      },
      error: (error) => {
        console.error('Error fetching images:', error);
      },
    });
  

  }

}
