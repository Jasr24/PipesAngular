import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreUpper: string = 'jose andres';
  nombreLower: string = 'JOSE ANDRES';
  nombreCompleto: string = 'jOSe anDres sAAvedrA RomERO';

  fecha: Date = new Date(); //El dia y fecha actual en el que se esta mirando esto

}
