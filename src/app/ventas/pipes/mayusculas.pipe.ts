import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas' //nombre del pipe
})
export class MayuscularPipe implements PipeTransform{

    transform( valor: string, enMayusculas?: boolean ): string {  //El valor lo recibe cuando hacemos algo asi por ejemplo:  {{'nosotros'| mayusculas}}

        if(enMayusculas == false){
            return valor.toLowerCase();
        } 

        return valor.toUpperCase();

    }

}