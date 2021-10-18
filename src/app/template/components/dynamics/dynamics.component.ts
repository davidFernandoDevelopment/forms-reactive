import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IFavorito {
  id: number;
  name: string;
}
interface IUser {
  name: string;
  age: number;
  favorites: IFavorito[];
}


@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  favorite: string = '';
  user: IUser = {
    name: '',
    age: 0,
    favorites: []
  };

  save(e: NgForm) {
    console.log(this.user);
    this.user = {
      name: '',
      age: 0,
      favorites: []
    };
    e.resetForm();
  }
  addFav(): void {
    if (!this.favorite) return;
    const newPlay: IFavorito = {
      id: this.user.favorites.length + 1,
      name: this.favorite
    };
    console.log(this.favorite);

    this.user.favorites.push({ ...newPlay });
    this.favorite = '';
  }
  deleteFav(index: number): void {
    this.user.favorites.splice(index, 1);
  }
}
