import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('Aceite Ideal'),
  //   price: new FormControl('0'),
  //   existences: new FormControl('5')
  // });
  myForm: FormGroup = this._formBuilder.group({
    name: [
      '',
      [Validators.required,
      Validators.minLength(4)]
    ],
    price: [null, [Validators.required, Validators.min(0)]],
    existences: [null, [Validators.required, Validators.min(0)]]
  });
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  fieldInvalid(field: string, typeError: string): boolean {
    return this.myForm.controls[field].getError(typeError)
      && this.myForm.controls[field].touched;
  }

  save() {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

  ngOnInit(): void {
    // this.myForm.setValue({
    //   name: 'Default name',
    //   price: 1,
    //   existences: 10
    // })
  }

}
