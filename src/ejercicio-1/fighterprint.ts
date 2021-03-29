import {Fighter} from "./fighter"

/**
 * clase cuya unica funcion es imprimir la informacion de un unico personaje por consola.
 */
export class FighterPrint {
    /**
     * 
     * @param fighter Personaje a mostrar
     */
    constructor(private fighter : Fighter) {
    }
    print() {
        console.log("Nombre : " + this.fighter.nombre);
        console.log("Informacion adicional : " + this.fighter.infoAdicional);
        console.log("Altura : " +  this.fighter.altura);
        console.log("Peso : " +  this.fighter.peso);
        console.log("Vida : " +  this.fighter.hp);
        console.log("Ataque : " +  this.fighter.ataque);
        console.log("Defensa : " +  this.fighter.defensa);
        console.log("Velocidad : " +  this.fighter.velocidad);
    }
}