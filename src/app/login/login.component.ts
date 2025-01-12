import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService,private router: Router) {}
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
    
    showPopup: boolean = false;

  closePopup() {
    this.showPopup = false;
  }



    onSubmit() {
      if (this.isLoginView) {
        this.loginService.login(this.email, this.password).subscribe(response => {
          console.log('Login successful:', response.token);
          if (response.token) {
            const dataToSend = true;
            
            localStorage.setItem('token', response.token);
          }
          this.router.navigate(['/chat']);
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
          this.showPopup=true
          this.showLogin()
        }, error => {
          console.error('Signup failed:', error);
        });
      }
    }


    onSubmitlogin() {
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
