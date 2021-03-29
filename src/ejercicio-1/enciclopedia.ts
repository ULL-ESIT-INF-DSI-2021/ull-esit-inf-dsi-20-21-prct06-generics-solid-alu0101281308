import {Fighter} from "./fighter"

/**
 * Clase encargada de almacenar los personajes.
 */
export class Enciclopedia<T extends Fighter> {
    private fighter: Set<T>;
    /**
     * 
     * @param fighter Coleccion de personajes.
     */
    constructor(fighter: T[]) {
        this.fighter = new Set(fighter);
    };

    /**
     * Metodo para agregar personajes a la base de datos.
     * @param fighter 
     */
    public addFighter(fighter: T) {
        this.fighter.add(fighter);
    }

    /**
     * Metodo que devuelve el numero total de personajes almacenados.
     */
    public get numeroTotalFighters() {
        return this.fighter.size;
    }

    /**
     * Metodo que devuelve un personaje segun su index dentro de la coleccion de personajes.
     * @param i index 
     * @returns fighter en la posicion i
     */
    public getfigtherIndex(i:number) : Fighter {
        let aux: Fighter[] = Array.from(this.fighter);
        return aux[i];
    }
}



