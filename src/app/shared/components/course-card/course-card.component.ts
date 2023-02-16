import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: any;
  @Input() isEditable: boolean = false;
  title?: string;
  description?: string;
  creationDate?: Date;
  duration?: number;
  authors?: string[];

  ngOnInit () {
    this.title = this.course.title;
    this.description = this.course.description;
    this.creationDate = this.course.creationDate;
    this.duration = this.course.duration;
    this.authors = this.course.authors;
  }
}
