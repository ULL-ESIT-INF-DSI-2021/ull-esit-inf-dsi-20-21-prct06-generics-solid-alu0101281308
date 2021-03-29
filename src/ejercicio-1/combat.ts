import {Fighter} from "./fighter"
import {EfectividadDeAtaque} from "./efectividaddeataque"

/**
 *  Clase base para las peleas entre personajes de distintos universos.
 */
export class Combat {
  /**
   * 
   * @param fighter1 Personaje que por defecto, sera el primero que ataque.
   * @param fighter2 Personake que por defecto, sera el primero en defenderse.
   */
  constructor(public readonly fighter1: Fighter, public readonly fighter2: Fighter) {
  }

  /**
   * Metodo que simula una pelea entre 2 personajes.
   * @returns Retorna el personaje ganador.
   */
  start() : Fighter{
    let daño_pk1 = 0;
    let daño_pk2 = 0;

    while (true) {
        let damage = new EfectividadDeAtaque().calcularDaño(this.fighter1.universo, this.fighter1.ataque, this.fighter2.universo, this.fighter2.defensa);
        daño_pk2 += damage;
        console.log(this.fighter1.nombre + " : " + this.fighter1.frase);
        console.log(this.fighter2.nombre + " sufrio un daño de : " + damage + " y su vida es de : " + (this.fighter2.hp - daño_pk2));
        if(daño_pk2 >= this.fighter2.hp)
            break;
        damage = new EfectividadDeAtaque().calcularDaño(this.fighter2.universo, this.fighter2.ataque, this.fighter1.universo, this.fighter1.defensa);
        daño_pk1 += damage;
        console.log(this.fighter2.nombre + " : " + this.fighter2.frase);
        console.log(this.fighter1.nombre + " sufrio un daño de : " + damage + " y su vida es de : " + (this.fighter1.hp - daño_pk1));
        if(daño_pk1 >= this.fighter1.hp)
            break;
    }

    if(daño_pk1 >= this.fighter1.hp){
        return this.fighter2
    } else {
        return this.fighter1
    }

  }

}