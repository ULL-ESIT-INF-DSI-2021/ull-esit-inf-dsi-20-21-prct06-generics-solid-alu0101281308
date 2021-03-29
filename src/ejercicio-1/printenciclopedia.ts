import {Enciclopedia} from "./enciclopedia"
import {FighterPrint} from "./fighterprint"
import {Fighter} from "./fighter"

/**
 * clase cuya unica funcion es imprimir la informacion de los personajes almacenados
 * por consola.
 */
export class PrintEnciclopedia {
    constructor(private enciclopedia: Enciclopedia<Fighter>) {
    }

    print() {
        for (let i = 0; i < this.enciclopedia.numeroTotalFighters ; i++) {
            const my_fighter = new FighterPrint(this.enciclopedia.getfigtherIndex(i));
            my_fighter.print();
        }
    }
}