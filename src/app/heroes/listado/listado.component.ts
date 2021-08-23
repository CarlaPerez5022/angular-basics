import { Component } from '@angular/core';
import { HeroeComponet } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Candy'];
heroeBorrado: string ='';

borrarHeroe ()  {

  this.heroeBorrado = this.heroes.shift() || '';
 

}







}


