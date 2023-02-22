import { Component } from '@angular/core';

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

  submit () {
    this.submitted = true;
  }

  toggleShowPassword () {
    this.showPassword = !this.showPassword;
  }
}
