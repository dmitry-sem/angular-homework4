import { AbstractControl, FormGroup } from '@angular/forms';

export class AbstractForm {
  public form: FormGroup;

  constructor() { }

  public getErrorMessage(control: AbstractControl): string {
    let msg = '';

    if (control.hasError('required')) {
      msg = 'You must enter a value';
    } else if (control.hasError('email')) {
      msg = 'Not a valid email';
    }

    return msg;
  }

  public isValid(control: AbstractControl): boolean {
    return !control.invalid;
  }

  public isEmpty(control: AbstractControl): boolean {
    return !control.value;
  }
}
