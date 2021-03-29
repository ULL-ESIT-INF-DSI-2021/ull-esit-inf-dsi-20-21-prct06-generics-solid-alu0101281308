import {universo} from "./fighter"
/**
 * Clase cuyo proposito es calcular el daño de cada ataque segun la efectividad que es en funcion 
 * al universo que pertezcan los personajes.
 */
export class EfectividadDeAtaque {
  /**
   * 
   * @param universo_atacante Universo del fighter atacante
   * @param ataque_atacante Ataque del fighter atacante
   * @param universo_oponente Universo del fighter oponente
   * @param defensa_oponente Defensa del fighter Oponente
   * @returns Devuelve el daño calculado.
   */
    calcularDaño(universo_atacante: universo, ataque_atacante: number, universo_oponente: universo, defensa_oponente: number) : number {
      if (universo_atacante == universo_oponente) {
        return 50 * (ataque_atacante / defensa_oponente) * 0.5;
      } else {
        switch (universo_atacante) {
          case universo.marvel: 
            if (universo_oponente == universo.dc) {
              return 50 * (ataque_atacante / defensa_oponente) * 2;
            }
            if (universo_oponente == universo.dragonball) {
              return 50 * (ataque_atacante / defensa_oponente) * 0.5;
            }
            if (universo_oponente == universo.pokemon) {
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            if (universo_oponente == universo.starwars) {
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            break;
          case universo.dc: //agua
            if (universo_oponente == universo.dragonball) {
              //vs hierba
              return 50 * (ataque_atacante / defensa_oponente) * 0.5;
            }
            if (universo_oponente == universo.marvel) {
              //vs fuego
              return 50 * (ataque_atacante / defensa_oponente) * 2;
            }
            if (universo_oponente == universo.pokemon) {
              //vs electrico
              return 50 * (ataque_atacante / defensa_oponente) * 0.5;
            }
            if (universo_oponente == universo.starwars) {
              //vs electrico
              return 50 * (ataque_atacante / defensa_oponente) * 0.5;
            }
            break;
          case universo.dragonball: //hierba
            if (universo_oponente == universo.dc) {
              //vs agua
              return 50 * (ataque_atacante / defensa_oponente) * 2;
            }
            if (universo_oponente == universo.marvel) {
              //vs fuego
              return 50 * (ataque_atacante / defensa_oponente) * 0.5;
            }
            if (universo_oponente == universo.pokemon) {
              //vs electrico
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            if (universo_oponente == universo.starwars) {
              //vs electrico
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            break;
          case universo.pokemon: //electrico
            if (universo_oponente == universo.dc) {
              //vs agua
              return 50 * (ataque_atacante / defensa_oponente) * 2;
            }
            if (universo_oponente == universo.dragonball) {
              //vs fuego
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            if (universo_oponente == universo.marvel) {
              //vs hierba
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            if (universo_oponente == universo.starwars) {
              //vs electrico
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            break;
          case universo.starwars: //electrico
            if (universo_oponente == universo.dc) {
              //vs agua
              return 50 * (ataque_atacante / defensa_oponente) * 2;
            }
            if (universo_oponente == universo.dragonball) {
              //vs fuego
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            if (universo_oponente == universo.marvel) {
              //vs hierba
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            if (universo_oponente == universo.pokemon) {
              //vs electrico
              return 50 * (ataque_atacante / defensa_oponente) * 1;
            }
            break;
        }
      }
    return 5;
    }
};