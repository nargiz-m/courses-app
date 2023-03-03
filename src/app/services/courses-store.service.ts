import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(true);
  private courses$$ = new BehaviorSubject<any[]>([]);
  
  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable();
  
  constructor(private coursesService: CoursesService) { }

  getAll(){
    this.isLoading$$.next(true);
    this.coursesService.getAll().subscribe((data) => this.courses$$.next(data.result))    
    this.isLoading$$.next(false);
  }

  searchCourses(searchTerm: string){
    this.isLoading$$.next(true);    
    this.coursesService.searchCourses(searchTerm).subscribe((data) => this.courses$$.next(data.result))    
    this.isLoading$$.next(false);
  }

  createCourse(courseInfo: any){
    this.coursesService.createCourse(courseInfo)
  }

  editCourse(id: string, courseInfo: any){
    this.coursesService.editCourse(id, courseInfo)
  }
  
  getCourse(id: string): any {
    this.isLoading$$.next(true);
    this.coursesService.getCourse(id).subscribe((data) => this.courses$$.next([data.result]))  
    this.isLoading$$.next(false);
  }

  deleteCourse(id: string){
    this.coursesService.deleteCourse(id)
  }
}
