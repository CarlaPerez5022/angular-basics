import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dzb.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
 
})
export class PersonajesComponent  {
  
  //@Input() personajes: Personaje[] = [];

  get personajes(){
    return this.DbzService.personajes;
  }

  constructor( private DbzService: DbzService ) {}
}
