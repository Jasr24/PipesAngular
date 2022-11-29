
export enum Color {
    //Enumeros en vez de escribir el color donde lo llamemos. rojo 0, negro 1 y susecibamente
    rojo, negro, azul, verde
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}