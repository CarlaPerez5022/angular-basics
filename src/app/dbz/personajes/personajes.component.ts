import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dzb.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
 
})
export class PersonajesComponent  {
  
  @Input() personajes: Personaje[] = [];

 
}
