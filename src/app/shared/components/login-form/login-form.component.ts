import { Component } from '@angular/core';
import { AuthStateFacade } from 'src/app/store/auth/auth.facade';

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

  constructor (private authService: AuthStateFacade) {}
  
  submit () {
    this.submitted = true;
    this.authService.login(JSON.stringify(this.model));
  }

  toggleShowPassword () {
    this.showPassword = !this.showPassword;
  }
}
