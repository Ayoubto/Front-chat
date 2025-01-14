import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importation du CommonModule
import { RagService } from '../services/rag.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-ai',
  templateUrl: './chat-ai.component.html',
  styleUrl: './chat-ai.component.css'
})
export class ChatAiComponent {

  showAll:boolean=false
  isClickable: boolean = false; 
  userQuestion: string = '';
  checkInput() {
    this.isClickable = this.userQuestion.trim() !== ''; // Active si le texte n'est pas vide
  }

  token: string | null = null;
  decodedToken: any;
  ngOnInit() {
    this.token = localStorage.getItem('token');

    if (this.token) {
      const isExpired = this.jwtHelper.isTokenExpired(this.token);
      console.log('Le token est expiré ?', isExpired);

      this.decodedToken = this.jwtHelper.decodeToken(this.token);
      console.log('Données décodées du token :', this.decodedToken);
      this.id=this.decodedToken.id
    } else {
      console.log('Aucun token trouvé.');
      this.router.navigate(['/login']);
    }
  }






  chatForm: FormGroup;
 
  constructor(private fb: FormBuilder, private RagService: RagService,private jwtHelper: JwtHelperService,private router: Router) {
    // Initialisation du formulaire avec FormBuilder
    this.chatForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  datachat:any=""
  response: any; // Pour stocker la réponse API
  error: any;  
   id = ''; 
 
   sessionId:string= '';
   
  startSession() {
   
    const userData = {
      user_id:"hdzdhh76253t35ezdt5325e"
    }
    console.log('Corps de la requête envoyé à l’API :', userData);
    this.RagService.start_session(userData).subscribe(
      (data:any) => {
        
        this.response = data; // Stockez la réponse
        console.log('Session démarrée avec succès :', data["session_id"]);
        this.sessionId=data["session_id"]
        this.askQuestion()
        
        
      },
      (error) => {
        this.error = error; // Stockez l'erreur
        console.error('Erreur lors du démarrage de la session :', error);
      }
    );
  }



  askQuestion() {
    const requestData = {
      session_id: this.sessionId,
      question: this.userQuestion,
    };
  
    this.RagService.ASK(requestData).subscribe(
      (response) => {
        console.log('Réponse de l\'API :', response);
        this.userQuestion=""
        this.fetchSessionHistory()
        
      },
      (error) => {
        console.error('Erreur lors de l\'envoi de la question :', error);
      }
    );
  }

  fetchSessionHistory() {
    this.RagService.getSessionHistory(this.sessionId).subscribe(
      (response:any) => {
        console.log('Historique de session :', response);
        this.datachat=response["history"]
        console.log(this.datachat)
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'historique de session :', error);
      }
    );
  }


Askfirst(){
  this.showAll=true
  this.startSession()
}

Asksecond(){
  this.showAll=true
  this.askQuestion()
}



  messages = [
    { sender: 'user', text: 'What are the security protocols?', timestamp: '10:00 AM' },
    { sender: 'ai', text: 'Security protocols include multi-factor authentication and data encryption.', timestamp: '10:01 AM' },
    { sender: 'user', text: 'Can you explain more about data encryption?', timestamp: '10:02 AM' },
    { sender: 'ai', text: 'Data encryption ensures that sensitive data is secure both in transit and at rest.', timestamp: '10:03 AM' },
    { sender: 'user', text: 'What are the security protocols?', timestamp: '10:00 AM' },
    { sender: 'ai', text: 'Security protocols include multi-factor authentication and data encryption.', timestamp: '10:01 AM' },
    { sender: 'user', text: 'Can you explain more about data encryption?', timestamp: '10:02 AM' },
    { sender: 'ai', text: 'Data encryption ensures that sensitive data is secure both in transit and at rest.', timestamp: '10:03 AM' },
    { sender: 'user', text: 'What are the security protocols?', timestamp: '10:00 AM' },
    { sender: 'ai', text: 'Security protocols include multi-factor authentication and data encryption.', timestamp: '10:01 AM' },
    { sender: 'user', text: 'Can you explain more about data encryption?', timestamp: '10:02 AM' },
    { sender: 'ai', text: 'Data encryption ensures that sensitive data is secure both in transit and at rest.', timestamp: '10:03 AM' }
  
  
  ];

}
