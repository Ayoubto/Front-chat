import { Component } from '@angular/core';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {}

  get isLoginRoute() {
    return this.router.url === '/login';
  }
  title = 'chat-app';
}
