import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from './session-storage.service';

type AuthResponse = {
  result: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(this.sessionService.getToken().length > 0);
  public isAuthorized$ = this.isAuthorized$$.asObservable();
  constructor( private httpClient: HttpClient, private sessionService: SessionStorageService ) {}

  login(loginInfo: string) {
    this.httpClient.post<AuthResponse>('http://localhost:4000/login', loginInfo, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .subscribe(data => {
        this.sessionService.setToken(data.result)
        this.isAuthorized$$.next(true);
        window.location.reload();
      })
  }

  logout() {
    this.httpClient.delete('http://localhost:4000/logout', {
      headers: {
        "Authorization": this.sessionService.getToken()
      }
    })
      .subscribe(() => {
        this.sessionService.deleteToken()
        this.isAuthorized$$.next(false)
        window.location.reload();
      })
  }
  
  register(registerInfo: any) {
    this.httpClient.post('http://localhost:4000/register', registerInfo)
      .subscribe(() => this.login(registerInfo))
  }
}
