import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(true);
  private courses$$ = new BehaviorSubject<any[]>([]);
  
  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.isLoading$$.asObservable();
  
  constructor(private coursesService: CoursesService) { }

  getAll(){
    this.isLoading$$.next(true);
    this.courses$$.next(this.coursesService.getAll())
    this.isLoading$$.next(false);
  }

  searchCourses(searchTerm: string){
    this.isLoading$$.next(true);
    this.courses$$.next(this.coursesService.searchCourses(searchTerm))
    this.isLoading$$.next(false);
  }

  createCourse(courseInfo: any){
    this.coursesService.createCourse(courseInfo)
  }

  editCourse(id: string, courseInfo: any){
    this.coursesService.editCourse(id, courseInfo)
  }
  
  getCourse(id: string): any {
    this.coursesService.getCourse(id)
  }

  deleteCourse(id: string){
    this.coursesService.deleteCourse(id)
  }
}
