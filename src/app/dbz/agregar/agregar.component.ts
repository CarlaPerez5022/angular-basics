import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Output } from '@angular/core';
import { Component, Input} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dzb.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  { 


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private DbzService: DbzService ){}

 //@Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter(); 

  agregar () {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }

  //this.onNuevoPersonaje.emit(this.nuevo);
  this.DbzService.agregarPersonaje( this.nuevo );

  
  this.nuevo = {
    nombre:'',
    poder: 0

   }


}}
