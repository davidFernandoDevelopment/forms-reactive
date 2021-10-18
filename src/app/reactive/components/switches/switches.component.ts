import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this._formBuilder.group({
    gender: ['F', Validators.required],
    notifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });
  user = {
    gender: 'M',
    notifications: false
  };

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm.reset({ ...this.user, termsAndConditions: false });
    this.myForm
      .valueChanges
      .subscribe(({
        termsAndConditions,
        ...user
      }) => {
        this.user = user;
      });
  }

  save(): void {
    const formValue = { ...this.myForm.value };
    const {
      termsAndConditions,
      ...user
    } = formValue;

    console.log(user);
  }

}
