import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
