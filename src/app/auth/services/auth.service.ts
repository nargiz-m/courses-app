import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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

  login(loginInfo: string): Observable<any> {
    return this.httpClient.post<AuthResponse>('http://localhost:4000/login', loginInfo, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  logout(): Observable<any> {
    return this.httpClient.delete('http://localhost:4000/logout', {
      headers: {
        "Authorization": this.sessionService.getToken()
      }
    })
  }
  
  register(registerInfo: any): Observable<any> {
    return this.httpClient.post('http://localhost:4000/register', registerInfo);
  }
}
