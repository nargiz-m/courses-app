import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserStateFacade } from './user.facade';
import { UsersEffects } from './user.effects';
import { usersReducer, initialState } from './user.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', usersReducer, {
      initialState
    }),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UserStateFacade]
})
export class UserStateModule {}
