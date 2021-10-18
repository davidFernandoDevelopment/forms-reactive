import { Component, OnInit } from '@angular/core';

interface IMenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class SidemenuComponent implements OnInit {

  menuTemplate: IMenuItem[] = [
    { text: 'Basicos', path: 'template/basics' },
    { text: 'Dinámicos', path: 'template/dynamics' },
    { text: 'Switches', path: 'template/switches' }
  ];
  menuReactive: IMenuItem[] = [
    { text: 'Basicos', path: 'reactive/basics' },
    { text: 'Dinámicos', path: 'reactive/dynamics' },
    { text: 'Switches', path: 'reactive/switches' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
