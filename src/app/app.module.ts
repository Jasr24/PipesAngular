import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //animacion previo se incorporo FieldsetModule


//Modulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { VentasModule } from './ventas/ventas.module';


//Cambiar el locale de la app.. 1. para cambiar el idioma(fecha, moneda)
import localeCo from '@angular/common/locales/es-CO';  //localeCo, nombre se lo ponemos como queramos, en la carpeta locales estan todos los disiomas de los paises
import localeFr from '@angular/common/locales/fr';  //localeCo, nombre se lo ponemos como queramos, en la carpeta locales estan todos los disiomas de los paises
import { registerLocaleData } from '@angular/common'  //registerLocaleData Esta es una funcion
registerLocaleData(localeCo); //usamos la funcion y le enviamos el localeCo del pais isioma que seleccionamos, aqui lo registramos
registerLocaleData(localeFr); //usamos la funcion y le enviamos el localeCo del pais isioma que seleccionamos, aqui lo registramos


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule //animacion previo se incorporo FieldsetModule
  ],
  providers: [ 
    {provide: LOCALE_ID, useValue:'es-CO'} //aqui de forma global cambiamos el idioma en el locale...'es-CO' debe ser el mismo del de arriba
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
