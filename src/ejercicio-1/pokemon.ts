import {Fighter, universo} from "./fighter"

export enum elemento {Fuego, Agua, Hierba, Electrico}

/**
 * Clase para crear todos los personajes del universo Pokemon.
 */
export class Pokemon extends Fighter {
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
     * @param tipo_ Tipo de elemento al que pertenece el pokemon.
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
                 private tipo_ : elemento) {
        super(nombre_, peso_, altura_, hp_, ataque_, defensa_, velocidad_, frase_, universo_)
    }

    public get infoAdicional() {
        return "Es un tipo de pokemon " + elemento[this.tipo_];
    }

};