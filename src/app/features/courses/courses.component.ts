import { Input, Component, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { mockedCourseList } from 'src/mockCourseList';

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

  constructor(private authService: AuthService, private coursesStore: CoursesStoreService) {}

  ngOnInit() {
    this.coursesStore.getAll();
    this.coursesStore.courses$.subscribe((data) => this.courses = data);
  }
  
  openModal(open: boolean) {
    this.showModal = open;
  }

  print(result: string) {
    if(result) {
      console.log(result)
    }
    this.openModal(false)
  }

  logout() {
    this.authService.logout();
  }
}
