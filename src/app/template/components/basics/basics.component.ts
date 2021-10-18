import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') formRef!: NgForm;
  initForm = {
    name: 'Primor',
    price: 10,
    existence: 10
  };

  constructor() { }

  ngOnInit(): void {

  }

  fieldState(type: string): boolean {
    let condicion = false;
    if (type === "name") {
      condicion = this.formRef?.controls[type]?.invalid &&
        this.formRef?.controls[type]?.touched;
    } else if (type === "price") {
      condicion = this.formRef?.controls[type]?.value < 0 &&
        this.formRef?.controls[type]?.touched;
    }
    return condicion;
  }
  saved() {
    if (this.formRef.valid) {
      console.log(this.formRef);
      this.formRef.resetForm({
        name: '',
        price: 0,
        existence: 0
      });
    }
  }
}
