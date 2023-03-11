import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/user/services/user.service';
import { requestGetUser, requestGetUserSuccess, requestGetUserFail, requestGetAuthor, requestGetAuthorSuccess, requestGetAuthorFail, requestAddAuthor, requestAddAuthorSuccess, requestAddAuthorFail } from './user.actions';

@Injectable()
export class UsersEffects {
    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(requestGetUser),  
        mergeMap(() => this.userService.getUser().pipe(
            map(user => (requestGetUserSuccess({user}))),
            catchError(error => of(requestGetUserFail({error})))
        ))
    ))

    getAuthor$ = createEffect(() => this.actions$.pipe(
        ofType(requestGetAuthor),  
        mergeMap((action) => this.userService.getAuthor(action.id).pipe(
            map(author => (requestGetAuthorSuccess({author}))),
            catchError(error => of(requestGetAuthorFail(error)))
        ))
    ))

    addAuthor$ = createEffect(() => this.actions$.pipe(
        ofType(requestAddAuthor),  
        mergeMap((action) => this.userService.addAuthor(action.body).pipe(
            map(() => (requestAddAuthorSuccess())),
            catchError(error => of(requestAddAuthorFail(error)))
        ))
    ))

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}
}