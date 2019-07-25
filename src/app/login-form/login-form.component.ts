import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractForm } from '../models/abstract-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent extends AbstractForm {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {
    super();
  }
}
