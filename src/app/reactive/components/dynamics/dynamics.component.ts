import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

interface IUser {
  name: string;
  age: number;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: []
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this._formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3)]
    ],
    age: [
      null,
      [Validators.required, Validators.min(0)]
    ],
    favorites: this._formBuilder.array([], Validators.required)
  });

  newFavorite: FormControl = this._formBuilder.control(
    '',
    Validators.required
  );

  get favorites(): FormArray {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  fieldInvalid(field: string, typeError: string, omitTouched = false): boolean {
    return this.myForm.controls[field].getError(typeError)
      && (omitTouched || this.myForm.controls[field].touched);
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const user: IUser = this.myForm.value;
    console.log(user);
    this.myForm.reset();
    this.favorites.clear();
  }

  addFavorite() {
    if (this.newFavorite.invalid) return;
    // this.favorites.push(
    //   new FormControl(
    //     this.newFavorite.value,
    //     Validators.required)
    // );
    this.favorites.push(
      this._formBuilder.control(
        this.newFavorite.value,
        Validators.required
      )
    );
    this.newFavorite.reset();
  }

  deleteFavorite(index: number) {
    console.log("Deleted!!!");
    this.favorites.removeAt(index);
  }
}
