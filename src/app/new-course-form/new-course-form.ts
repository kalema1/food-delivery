import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-course-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-course-form.html',
  styleUrl: './new-course-form.scss',
})
export class NewCourseForm {
  // create a new instance of FormGroup
  signUpForm = new FormGroup({
    // first value is the initial state of the form control the second value is the validators
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get username() {
    return this.signUpForm.get('username');
  }
}
