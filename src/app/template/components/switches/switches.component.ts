import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: []
})
export class SwitchesComponent {

  user = {
    gender: '',
    notifiers: false
  };
  termsAndConditions: boolean = false;

}
