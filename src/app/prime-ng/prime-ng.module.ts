import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset'; //Para que funcione tiene que importar BrowserAnimationsModule en el componente principal
import { ToolbarModule } from 'primeng/toolbar';
//import { TableModule } from 'primeng/table';


@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule, //Para que funcione tiene que importar BrowserAnimationsModule en el componente principal
    ToolbarModule,
    //TableModule
  ]
})
export class PrimeNgModule { }
