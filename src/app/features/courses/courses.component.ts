import { Input, Component, Output, OnInit } from '@angular/core';
import { AuthStateFacade } from 'src/app/store/auth/auth.facade';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input() username?: string;
  
  @Input() courses: any[] = [];
  @Input() areEditable: boolean = true;
  @Output() action?: () => void;

  showModal: boolean = false;
  currentId?: string;

  constructor(private authService: AuthStateFacade, private coursesStore: CoursesStateFacade, private userStore: UserStateFacade) {}

  ngOnInit() {
    this.userStore.getUser();
    this.userStore.name$.subscribe((data) => this.username = data)
    this.userStore.isAdmin$.subscribe((data) => this.areEditable = data)
    this.coursesStore.getAllCourses();
    this.coursesStore.allCourses$.subscribe((data: any) => this.courses = data.result ?? []);
  }
  
  openModal(open: boolean) {
    this.showModal = open;
  }

  searchCourse(searchTerm: string) {
    this.coursesStore.getFilteredCourses(searchTerm);
  }

  deleteCourse(result: boolean) {
    if(result && this.currentId) {
      this.coursesStore.deleteCourse(this.currentId)
      window.location.reload();
    }
    this.openModal(false)
    this.currentId = undefined;
  }

  removeCourse(id: string) {
    this.currentId = id;
    this.openModal(true)
  }

  logout() {
    this.authService.logout();
  }
}
