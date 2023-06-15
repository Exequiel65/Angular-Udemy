import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Charater } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  @Input()
  public characterList : Charater[] = [
    {
      id: "",
      name : 'Trunks',
      power : 10
    }
  ]


  onDeleteCharacter(id?: string):void{
    if (!id) {
      return
    }
    this.onDeleteId.emit(id)
  }
}
