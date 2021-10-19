import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  textPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  customValidate = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value?.trim().toLowerCase();
    if (value === "default") {
      return {
        default: true
      };
    }
    return null;
  };

  equalFields(field_1: string, field_2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(field_1)?.value;
      const pass2 = formGroup.get(field_2)?.value;

      console.log(pass1, pass2);
      if (pass1 !== pass2) {
        formGroup.get(field_2)?.setErrors({
          noEquals: true
        });
        return {
          noEquals: true
        };
      }
      formGroup.get(field_2)?.setErrors(null);123
      return null;
    };
  }
}
