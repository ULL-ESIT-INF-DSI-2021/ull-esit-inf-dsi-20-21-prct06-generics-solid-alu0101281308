import {Fighter, universo} from "./fighter"

export enum raza {Humano, Extraterrestre, Deidad, Mutante}

/**
 * Clase que crea personajes del universo Marvel
 */
export class Marvel extends Fighter {
    /**
     * 
     * @param nombre_ Nombre del fighter.
     * @param peso_ Peso del fighter.
     * @param altura_ Altura del fighter.
     * @param hp_ Vida del fighter.
     * @param ataque_ Ataque del fighter.
     * @param defensa_ Defensa del fighter.
     * @param velocidad_ Velocidad del fighter.
     * @param frase_ Frase que dira el fighter en sus peleas.
     * @param universo_ Universo al que pertenece.
     * @param raza_ Raza a la que pertenece el personaje del marvel.
     */
    constructor(nombre_: string, 
                peso_: number, 
                altura_:number, 
                hp_:number, 
                ataque_:number, 
                defensa_:number, 
                velocidad_:number, 
                frase_: string,
                universo_:universo,
                private raza_: raza) {
       super(nombre_, peso_, altura_, hp_, ataque_, defensa_, velocidad_, frase_, universo_)
   }

   public get infoAdicional() {
    return "Su raza es un/una " + raza[this.raza_];
   }   

};