import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



  constructor(public router: Router ,private jwtHelper: JwtHelperService) {}
  token: string | null = null;
  decodedToken: any;
  ngOnInit() {

    if (typeof window === 'undefined') {
      console.error('Window is undefined. Are you running in a server-side environment?');
    } else if (typeof localStorage === 'undefined') {
      console.error('localStorage is undefined.');
    } else {
      console.log('Environment looks fine. Proceeding...');
    }
    // Récupérer le token depuis localStorage
    this.token = localStorage.getItem('token');

    if (this.token) {
      // Vérifier si le token est expiré
      const isExpired = this.jwtHelper.isTokenExpired(this.token);
      console.log('Le token est expiré ?', isExpired);

      // Décoder le token
      this.decodedToken = this.jwtHelper.decodeToken(this.token);
      console.log('Données décodées du token :', this.decodedToken);
    } else {
      console.log('Aucun token trouvé.');
    }
  }
  getDynamicText() {
    if (this.router.url === '/chat') {
      return 'Start new chat';
    } else if (this.router.url === '/aichat') {
      return 'AI Chat Security';
    } else if (this.router.url === '/image') {
      return 'AI image generator';
    } else if (this.router.url === '/graph') {
      return 'Check vulnerability';
    } 
    
    else {
      return 'Start new chat';
    }
  }

}
