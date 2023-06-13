import { Component } from '@angular/core';
import { Charater } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Charater[] = [
    {
      name: "Krillin",
      power : 1000
    },
    {
      name : 'Goku',
      power : 9500
    },
    {
      name : 'Vegeta',
      power : 7500
    }
  ];
}
