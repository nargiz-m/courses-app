import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionStorageService } from './services/session-storage.service';



@NgModule({
  declarations: [],
  providers: [AuthService, SessionStorageService, { provide: Window, useValue: window }],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AuthModule { }
