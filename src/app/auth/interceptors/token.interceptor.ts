import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';
import { Router } from '@angular/router';
import { AuthStateFacade } from 'src/app/store/auth/auth.facade';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private sessionStorageService: SessionStorageService, private authService: AuthStateFacade, private router: Router) {} 
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.sessionStorageService.getToken();
        
        if(token) {
            request = request.clone({
                setHeaders: {Authorization: token}
            });
        }

        return next.handle(request).pipe(
            catchError((err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.authService.logout();
                        this.router.navigateByUrl('http://localhost:4200/login')
                    }
                }
                return throwError(err);
            }
        ));
    }
}