import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";



import { Charater } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Charater[] = [
    {
      id: uuid(),
      name: "Krillin",
      power : 1000
    },
    {
      id: uuid(),
      name : 'Goku',
      power : 9500
    },
    {
      id: uuid(),
      name : 'Vegeta',
      power : 7500
    }
  ];

  addCharacter(character: Charater):void{
    const newCharacter: Charater = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id: string):void{
    this.characters = this.characters.filter( character => character.id !== id);
  }




}
