import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public router: Router) {}
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
