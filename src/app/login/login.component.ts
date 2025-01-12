import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}
  userDataSignin = {
    email_signup:'',
    password_signup:'',
    passwordConfirmation_signup:'',
    Firstname_signup:'',
    Lastname_signup:''
    };
  
    email: string = '';
    password: string = '';
  
    email_signup: string = '';
    password_signup: string = '';
    passwordConfirmation_signup: string = '';
    Firstname_signup: string = '';
    Lastname_signup: string = '';
  
    isLoginView: boolean = true;
  
    showLogin() {
      this.email = '';
      this.password = '';
      this.isLoginView = true;
    }
  
    showSignIn() {
      this.email_signup= '';
      this.password_signup = '';
      this.passwordConfirmation_signup = '';
      this.Firstname_signup = '';
      this.Lastname_signup = '';
      this.isLoginView = false;
    }
  
    onSubmit() {
      if (this.isLoginView) {
        this.loginService.login(this.email, this.password).subscribe(response => {
          console.log('Login successful:', response);
        }, error => {
          console.error('Login failed:', error);
        });
      } else {
        const userData = {
          email: this.email_signup,
          password: this.password_signup,
          confirmPassword: this.passwordConfirmation_signup,
          firstname: this.Firstname_signup,
          lastname: this.Lastname_signup
        };
        this.loginService.signup(userData).subscribe(response => {
          console.log('Signup successful:', response);
        }, error => {
          console.error('Signup failed:', error);
        });
      }
    }
  

}
