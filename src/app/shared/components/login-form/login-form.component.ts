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
    this.authService.login(JSON.stringify(this.model));
    this.submitted = true;
  }

  toggleShowPassword () {
    this.showPassword = !this.showPassword;
  }
}
