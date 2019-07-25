import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractForm } from '../models/abstract-form';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent extends AbstractForm {
  form = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {
    super();
  }
}
