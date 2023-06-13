import { Component, Input } from '@angular/core';
import { Charater } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList : Charater[] = [
    {
      name : 'Trunks',
      power : 10
    }
  ]
}
