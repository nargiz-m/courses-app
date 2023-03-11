import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoursesStateFacade } from './courses.facade';
import { CoursesEffects } from './courses.effects';
import { coursesReducer, initialState } from './courses.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('courses', coursesReducer, {
      initialState
    }),
    EffectsModule.forFeature([CoursesEffects])
  ],
  providers: [CoursesStateFacade]
})
export class CoursesStateModule {}
