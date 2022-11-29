import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela' //nombre del pipe
})
export class VuelaPipe implements PipeTransform{

    transform(valor: boolean): string {
        return (valor) ? 'vuela' : 'no vuela'
    }

}