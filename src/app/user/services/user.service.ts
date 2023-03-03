import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';

type Response = {
  result: any[],
  successful: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient, private sessionService: SessionStorageService) { }

  getUser(): Observable<any> {
    return this.httpClient.get<Response>('http://localhost:4000/users/me', {
      headers: {
        "Authorization": this.sessionService.getToken()
      }
    });
  }

  getAuthor(id: string): Observable<any> {
    return this.httpClient.get<Response>(`http://localhost:4000/authors/${id}`);
  }

  addAuthor(author: string) {
    this.httpClient.post<Response>('http://localhost:4000/authors/add', author).subscribe((data) => console.log(data))
  }
}
