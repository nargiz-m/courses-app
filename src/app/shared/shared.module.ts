import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent
} from "./components";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FomattingMinutesPipe } from './pipes/fomatting-minutes.pipe';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { PasswordToggleDirective } from './directives/password-toggle.directive';

const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent
];

@NgModule({
  declarations: [components, FomattingMinutesPipe, CreationDatePipe, EmailValidatorDirective, PasswordToggleDirective],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [components]
})
export class SharedModule { }
