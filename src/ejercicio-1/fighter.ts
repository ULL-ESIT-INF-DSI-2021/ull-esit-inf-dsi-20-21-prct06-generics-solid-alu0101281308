export enum universo {pokemon, dragonball, dc, marvel, starwars}

/**
 * Clase padre de todos los personajes.
 */
export abstract class Fighter {
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
   */
    constructor(private nombre_: string, 
                private peso_: number, 
                private altura_:number, 
                private hp_:number, 
                private ataque_:number, 
                private defensa_:number, 
                private velocidad_:number, 
                private frase_: string,
                private universo_ : universo) {
    }

    public get nombre() {
      return this.nombre_;
    }

    public get peso() {
      return this.peso_;
    }

    public get altura() {
      return this.altura_;
    }

    public get hp() {
      return this.hp_;
    }

    public get ataque() {
      return this.ataque_;
    }

    public get defensa() {
      return this.defensa_;
    }

    public get velocidad() {
      return this.velocidad_;
    }

    public get frase() {
      return this.frase_;
    }

    public get universo() {
      return this.universo_;
    }

    /**
    * Metodo que da informacion adicional del personaje.
    */
    public abstract get infoAdicional() : string;

}