import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrl: './new-chat.component.css'
})
export class NewChatComponent {
  token: string | null = null;
  decodedToken: any;

constructor(private jwtHelper: JwtHelperService,private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');

    if (this.token) {
      const isExpired = this.jwtHelper.isTokenExpired(this.token);
      console.log('Le token est expiré ?', isExpired);

      this.decodedToken = this.jwtHelper.decodeToken(this.token);
      console.log('Données décodées du token :', this.decodedToken);
      
    } else {
      console.log('Aucun token trouvé.');
      this.router.navigate(['/login']);
    }
  }
}
