import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionStorageService } from 'src/app/auth/services/session-storage.service';
import { requestLogin, requestLoginSuccess, requestLoginFail, requestRegister, requestRegisterFail, requestLogout, requestLogoutSuccess, requestLogoutFail } from './auth.actions';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() => this.actions$.pipe(
        ofType(requestLogin),  
        mergeMap((action) => this.authService.login(action.body).pipe(
            map(token => {
                this.sessionService.setToken(token);
                return requestLoginSuccess();
            }),
            catchError(error => of(requestLoginFail(error)))
        ))
    ))

    register$ = createEffect(() => this.actions$.pipe(
        ofType(requestRegister),  
        mergeMap((action) => this.authService.register(action.body).pipe(
            map(() => (requestLogin(action.body))),
            catchError(error => of(requestRegisterFail(error)))
        ))
    ))

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(requestLogout),  
        mergeMap(() => this.authService.logout().pipe(
            map(() => {
                this.sessionService.deleteToken()
                return requestLogoutSuccess();
            }),
            catchError(error => of(requestLogoutFail(error)))
        ))
    ))

    redirectToTheMainPage$ = createEffect(() => this.actions$.pipe(
        ofType(requestLoginSuccess, requestLogoutSuccess),  
        tap(() => {
            this.router.navigate(['/'])
        })),
        { dispatch: false }
    )

    constructor(
        private router: Router,
        private actions$: Actions,
        private authService: AuthService,
        private sessionService: SessionStorageService
    ) {}
}