import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Charater } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();
  @Input()
  public characterList : Charater[] = [
    {
      name : 'Trunks',
      power : 10
    }
  ]


  onDeleteCharacter(index: number):void{
    this.onDeleteId.emit(index)
  }
}
