import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  model = {
    email: '',
    password: ''
  }
  submitted = false;
  showPassword = false;

  constructor (private authService: AuthService) {}
  
  submit () {
    this.submitted = true;
    this.authService.login(JSON.stringify(this.model));
  }

  toggleShowPassword () {
    this.showPassword = !this.showPassword;
  }
}
