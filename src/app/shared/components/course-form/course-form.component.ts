import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormControl, Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CoursesStateFacade } from 'src/app/store/courses/courses.facade';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { nameValidator } from '../../utils/name-validator.directive';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  constructor(public fb: FormBuilder, public library: FaIconLibrary, private courseService: CoursesStateFacade, private userService: UserStoreService) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    const courseId = window.location.pathname.split('/').pop();
    const authors: string[] = [];
    if(courseId && courseId != 'add') {
      this.courseService.getSingleCourse(courseId);
      this.courseService.course$.subscribe((data) => {
        if(data?.result) {
          this.currentCourse = data?.result;
          data?.result.authors.forEach((element: string) => {
            if(!authors.includes(element)){
              this.userService.getAuthor(element).subscribe((data) => this.authors.push(new FormControl(data.result)));
              authors.push(element);
            }
          });
          this.courseForm = this.fb.group({
            title: [this.currentCourse?.title, Validators.required],
            description: [this.currentCourse?.description, Validators.required],
            newAuthor: this.fb.group({
              name: ['', nameValidator()]
            }),
            duration: [this.currentCourse?.duration, [Validators.required, Validators.min(0)]]
          });
        }
      });
      this.submitBtnName = 'update'
    }
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      newAuthor: this.fb.group({
        name: ['', nameValidator()]
      }),
      duration: [0, [Validators.required, Validators.min(0)]]
    });
  }

  submitted = false;
  currentCourse?: any;
  courseForm?: any;
  authors = new FormArray<FormControl<Partial<{ name: string | null; id: string | null }> | null>>([]);
  submitBtnName = "Create course"

  get title(){ return this.courseForm.get('title') }
  get description(){ return this.courseForm.get('description') }
  get duration(){ return this.courseForm.get('duration') }
  get newAuthor(){ return this.courseForm.get('newAuthor') }
  get name(){ return this.courseForm.get('newAuthor.name') }

  onSubmit() {
    this.submitted = true;
    const formValues = {...this.courseForm.value, authors: this.authors.value.map((author) => author?.id)};
    if (this.currentCourse) {
      this.courseService.editCourse(formValues, this.currentCourse.id)
    } else {      
      this.courseService.createCourse(formValues)
    }
  }

  addAuthor() {
    const author = this.newAuthor;
    if(author?.value && author.valid) {
      this.userService.addAuthor(author.value).subscribe((data) => this.authors.push(new FormControl(data.result)));
    };
  }
}
