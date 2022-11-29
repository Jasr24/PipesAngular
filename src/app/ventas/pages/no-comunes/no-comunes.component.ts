import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //Si cambias el nombre por uno femenino    i18nSelect
  nombre: string = 'Jose Andres';
  genero: string ='maculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente(){
    this.nombre = 'Maria Pancracia';
    this.genero = 'femenino'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Pablo','Miriam'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.' //Con numeral cuenta el length del arreglo.
  }

  borrarCliente(){
    this.clientes.pop();
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Jose Andres',
    edad: 27,
    direccion: 'Otawa, Canada'
  }

  //json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: 'true'
    },
    {
      nombre: 'Robin',
      vuela: 'false'
    },
    {
      nombre: 'Pajaro',
      vuela: 'true'
    }
  ]

  //AsyncPiepe... se le tiene que pasar por obligacin un observable o una promesa, este pipe cansela la susbcripcion o maneja las promesas
  //observable:
  miObservable = interval(1000); //emitira numero del 0 en adelante y es un observable

  //promesa
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    },3500 );
  })
 
}
