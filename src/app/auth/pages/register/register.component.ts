import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from 'src/app/shared/services/validator.service';
import { EmailValidatorService } from '../../../shared/services/email-validator.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this._formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this._validators.textPattern)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this._validators.emailPattern)
      ],
      [
        this._emailValidator
      ]
    ],
    username: [
      '',
      [
        Validators.required,
        this._validators.customValidate
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
    confirmPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]
  }, {
    validators: [
      this._validators.equalFields('password', 'confirmPassword')
    ]
  });

  get emailErrorMessage(): string {
    return 'hola mundo';
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _validators: ValidatorService,
    private _emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'David sanchez',
      email: 'test1@test.com',
      username: 'davivho',
      password: '123456',
      confirmPassword: '123456'
    });
  }

  fieldInvalid(field: string, typeError: string, isTouched = false): boolean {
    return this.myForm.get(field)?.getError(typeError)
      && (isTouched || this.myForm.touched);
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
  }
}
