import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { emailValidator } from '../../utils/email-validator.directive';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  submitted = false;
  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, emailValidator()]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  get name() { return this.registrationForm.get('name'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }

  onSubmit () {
    this.submitted = true;
    this.authService.register(this.registrationForm.getRawValue());
  }
}
