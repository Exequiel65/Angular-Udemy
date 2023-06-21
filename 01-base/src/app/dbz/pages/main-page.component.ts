import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Charater } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService){
  }

  get characters(): Charater[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter(character: Charater):void{
    this.dbzService.addCharacter(character)
  }


}
