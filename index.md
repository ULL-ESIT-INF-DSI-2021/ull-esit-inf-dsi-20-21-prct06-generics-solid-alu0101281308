![ull](Imagenes/ull.png)
### Universidad de la Laguna
### Escuela Superior de Ingeniería y Tecnología
### Desarrollo de sistemas informáticos
### Elvis Nogueiras - alu0101281308

# Práctica 6 - Clases e interfaces genéricas. Principios SOLID

# Introducción

En esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también deberán utilizar los principios SOLID de diseño orientado a objetos.
# Objetivos

Como objetivos de esta práctica tenemos que completar 3 ejercicios con el propósito de practicar el lenguaje TypeScript con el uso de clases e interfaces genéricas del lenguaje TypeScript ademas de utilizar los principios SOLID.

# Ejercicio 1 - El combate definitivo

Partiendo del desarrollo realizado para el Ejercicio 1 de la Práctica 5, supongamos que ahora queremos incluir distintos tipos de contendientes a la pelea. Por ejemplo, podríamos incluir personajes del universo Marvel, DC Comics, Star Wars o Dragon Ball entre otros. Puede incluir otros universos y/o personajes que desee. Para extender el desarrollo anterior se pide:

* Desarrolle una clase abstracta llamada Fighter que permita hacer que un contendiente pueda luchar. Esta clase se considerará la superclase del resto de clases a implementar. Para cada universo, desarrolle la clase que lo represente (Pokemon, Marvel, DC, Star Wars, Dragon Ball, etc).

* Cada contendiente debe ser descendiente de su clase universo. Además, para cada contendiente se debe poder acceder a la información requerida para la clase Pokemon de la práctica anterior (nombre, altura, peso, etc). Puede incluir información extra que considere oportuna según el universo.

* La clase Combat ahora permitará que los combates se disputen entre contendientes de distintos universos. Todas las combinaciones deben ser posibles, incluso contendientes del mismo universo. Asimismo, la simulación de los combates debe ser similar a la realizada en la práctica anterior. Sin embargo, ahora con cada ataque los contendientes deberán mostrar alguna catching phrase representativa de su personaje.

* Actualice los valores de efectividad de los movimientos de los nuevos contendientes de la forma que considere oportuna. Contendientes de un universo son más fuertes que los de otro, personajes concretos son más fuertes que otros sin importar el universo o una mezcla de ambas. Puede basarse en un criterio similar al empleado en las prácticas anteriores sobre los tipos de Pokemon.
* La clase Pokedex deberá actualizarse para incluir también el resto de contendientes. Esto es, deberá ser capaz de almacenar personajes de todos los universos considerados dentro de una misma estructura de datos. Además, deberá ofrecer todas las funcionalidades previamente requeridas para los nuevos contendientes.

* Por último, desarrolle este ejercicio empleando los principios SOLID Single Responsability y Open-Closed.

## Código :

### Clase Combat
~~~
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
~~~
### Clase Pokedex
~~~
import {elemento} from "./pokemon"
import {Pokemon} from "./pokemon"

/**
 * Clase para crear pokedex
 */
export class Pokedex {
    pokemones: Pokemon[] 
    
    /**
     * 
     * @param pokemones Arreglo de pokemones, es opcional.
     */
    constructor(pokemones?: Pokemon[]) {

      
        if (pokemones) {
            this.pokemones = pokemones
        }else{
            this.pokemones = [];
        }
      
    }
    /**
     * Agrega pokemones a la base de datos de la pokedex.
     * @param pokemon Pokemon que sera agregado a la pokedex.
     */
    agregar(pokemon: Pokemon){
        this.pokemones.push(pokemon);
    }
    /**
     * Busca el pokemon segun su nombre en la pokedex y lo muestra por consola
     * @param nombre Nombre a buscar en la pokedex
     */
    print(nombre:string) {
        let pk = this.pokemones.find( pk => pk.nombre === nombre);
        if (pk){
            console.log("Pokedex data");
            console.log("Nombre : " + pk.nombre);
            console.log("Tipo : " + elemento[pk.tipo]);
            console.log("Altura : " + pk.altura);
            console.log("Peso : " + pk.peso);
            console.log("Vida : " + pk.hp);
            console.log("Ataque : " + pk.ataque);
            console.log("Defensa : " + pk.defensa);
            console.log("Velocidad : " + pk.velocidad);
        }else {
            console.log("Pokemon no encontrado en la pokedex.");
        }
    }
}
~~~
### Clase EfectividadDeAtaque
~~~
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
~~~
### Clase Enciclopedia
~~~
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
~~~
### Clase FighterPrint
~~~
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
~~~

### Clase PrintEnciclopedia
~~~
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
~~~

### Clase DC
~~~
import {Fighter, universo} from "./fighter"

/**
 * Clase para crear personajes del mundo de DC Comics.
 */
export class DC extends Fighter {
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
    constructor(nombre_: string, 
                peso_: number, 
                altura_:number, 
                hp_:number, 
                ataque_:number, 
                defensa_:number, 
                velocidad_:number, 
                frase_: string,
                universo_:universo) {
       super(nombre_, peso_, altura_, hp_, ataque_, defensa_, velocidad_, frase_, universo_)
   }

   
   public get infoAdicional() {
    return "noinfo";
   } 

};
~~~

### Clase DragonBall
~~~
import {Fighter, universo} from "./fighter"

/**
 * Clase para crear personajes del universo Dragon Ball.
 */
export class DragonBall extends Fighter {
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
    constructor(nombre_: string, 
                peso_: number, 
                altura_:number, 
                hp_:number, 
                ataque_:number, 
                defensa_:number, 
                velocidad_:number, 
                frase_: string,
                universo_:universo) {
       super(nombre_, peso_, altura_, hp_, ataque_, defensa_, velocidad_, frase_, universo_)
   }

   public get infoAdicional() {
    return "noinfo";
   } 
};
~~~

### Clase Fighter
~~~
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
~~~

### Clase Marvel
~~~
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
~~~

### Clase Pokemon
~~~
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
~~~

### Clase StarWars
~~~
import {Fighter, universo} from "./fighter"
/**
 * Clase para crear personajes del universo Star Wars
 */
export class StarWars extends Fighter {
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
     * @param galaxia_origen_ Galaxia de donde proviene el personaje de star wars
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
                 private galaxia_origen_ : string) {
        super(nombre_, peso_, altura_, hp_, ataque_, defensa_, velocidad_, frase_, universo_)
    }

    public get infoAdicional() {
        return "Planeta de origen : " + this.galaxia_origen_;
    }

};
~~~
### Codigo main del ejercicio.
~~~
import {Fighter, universo} from "./fighter"
import {DC} from "./dc"
import {Pokemon, elemento} from "./pokemon"
import {Marvel, raza} from "./marvel"
import {Enciclopedia} from "./enciclopedia"
import {PrintEnciclopedia} from "./printenciclopedia"
import {Combat} from "./combat"

let pikachu = new Pokemon("Pikachu", 6.0, 0.4, 1000, 55, 40, 90, "Pika pika", universo.pokemon, elemento.Electrico);
let joker = new DC("Joker", 70, 1.80, 650, 100, 20, 60, "HAHAHAHAHAHA", universo.dc);
let thor = new Marvel("Thor", 90, 2.00, 1000, 150, 150, 100, "Probaras los rayos de mi martillo", universo.marvel, raza.Deidad);

let coleccion = new Enciclopedia<Fighter>([pikachu, joker, thor]);

let informacion =  new PrintEnciclopedia(coleccion);
informacion.print();

let combate = new Combat(joker, thor);
console.log("El ganador del combate es : " + combate.start().nombre);
~~~

### Ejercicio muesta por Consola
~~~
1:05:11 - Found 0 errors. Watching for file changes.
Nombre : Pikachu
Informacion adicional : Es un tipo de pokemon Electrico
Altura : 0.4
Peso : 6
Vida : 1000
Ataque : 55
Defensa : 40
Velocidad : 90
Nombre : Joker
Informacion adicional : noinfo
Altura : 1.8
Peso : 70
Vida : 650
Ataque : 100
Defensa : 20
Velocidad : 60
Nombre : Thor
Informacion adicional : Su raza es un/una Deidad
Altura : 2
Peso : 90
Vida : 1000
Ataque : 150
Defensa : 150
Velocidad : 100
Joker : HAHAHAHAHAHA
Thor sufrio un daño de : 66.66666666666666 y su vida es de : 933.3333333333334
Thor : Probaras los rayos de mi martillo
Joker sufrio un daño de : 750 y su vida es de : -100
El ganador del combate es : Thor
~~~

### TDD

~~~
import 'mocha';
import {expect} from 'chai';
import {Fighter, universo} from '../../src/ejercicio-1/fighter';
import {Pokemon, elemento} from '../../src/ejercicio-1/pokemon';
import {DC} from '../../src/ejercicio-1/dc';
import {Marvel, raza} from '../../src/ejercicio-1/marvel';
import {Combat} from '../../src/ejercicio-1/combat';
import {Enciclopedia} from '../../src/ejercicio-1/enciclopedia';
import {FighterPrint} from '../../src/ejercicio-1/fighterprint'
import {EfectividadDeAtaque} from '../../src/ejercicio-1/efectividaddeataque'

describe('ejercicio 1', () => {

    let pikachu = new Pokemon("Pikachu", 6.0, 0.4, 1000, 55, 40, 90, "Pika pika", universo.pokemon, elemento.Electrico);
    let joker = new DC("Joker", 70, 1.80, 650, 100, 20, 60, "HAHAHAHAHAHA", universo.dc);
    let thor = new Marvel("Thor", 90, 2.00, 1000, 150, 150, 100, "Probaras los rayos de mi martillo", universo.marvel, raza.Deidad);

    let encuentro = new Combat(thor, joker)
    let enciclopedia = new Enciclopedia([joker, pikachu, thor]);

    it('pikachu es un objeto de tipo Pokemon', () => {
        expect(pikachu instanceof Pokemon).to.be.equal(true);
    });

    it('pikachu es un objeto de tipo Fighter', () => {
        expect(pikachu instanceof Fighter).to.be.equal(true);
    });

    it('enciclopedia es un objeto de tipo Enciclopedia', () => {
        expect(enciclopedia instanceof Enciclopedia).to.be.equal(true);
    });

    it('encuentro es un objeto de tipo Combat', () => {
        expect(encuentro instanceof Combat).to.be.equal(true);
    });

    it('El daño que recibe thor de el joker es ', () => {
        let daño = new EfectividadDeAtaque().calcularDaño(joker.universo, joker.ataque, thor.universo, thor.defensa);
        expect(daño).to.be.equal(66.66666666666666);
    });

    it('El ganador de un combarte entre thor y el joker es thor.', () => {
        expect(encuentro.start().nombre).to.be.equal("Thor");
    });

});
~~~



### Devuelve:
~~~
    ejercicio 1
    ✓ pikachu es un objeto de tipo Pokemon
    ✓ pikachu es un objeto de tipo Fighter
    ✓ enciclopedia es un objeto de tipo Enciclopedia
    ✓ encuentro es un objeto de tipo Combat
    ✓ El daño que recibe thor de el joker es 
    ✓ El ganador de un combarte entre thor y el joker es thor.
~~~

# Ejercicio 2 - Conversor de unidades

Considere una herramienta que nos permita realizar las conversiones de unidades o sistemas de medición para distintas magnitudes físicas. Las más comunes pueden ser:

* Velocidad
* Masa
* Longitud
* Tiempo
* Temperatura
* Fuerza
* Volumen

Diseñe una interfaz genérica isConvertible que permita realizar conversiones entre sistemas para cada magnitud considerada. La interfaz debe definirse de modo que, aquellas clases que la implementen, ofrezcan la posibilidad de hacer cambios entre, al menos, dos sistemas o unidades diferentes como, por ejemplo, en el caso de la velocidad, de millas por horas a kilómetros por hora. A continuación, diseñe diferentes clases, una por magnitud física, que implementen dicha interfaz. El desarrollo propuesto deberá incluir las siguientes funcionalidades:

* Una clase para cada magnitud considerada.
* Se pide ser capaz de poder cambiar, al menos, entre dos unidades o sistemas de medición por cada magnitud.
* El software deberá seguir los principios SOLID Single Responsability and Open-Closed.
## Código :
### Clase Fuerza
~~~
import {isConvertible} from "./isConvertible";

export enum forceUnits {NewtonToKilopondio, KilopondioToNewton}
/**
 * Clase para convertir fuerzas
 */
export class Fuerza implements isConvertible<forceUnits> {
    unit: number;
    fromTo: forceUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = forceUnits.NewtonToKilopondio;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: forceUnits): string {
      let out:string = "";
      if (fromTo === forceUnits.NewtonToKilopondio) {
        out += unit.toString() + " Newtons -> ";
        out += unit * 0.1019716213 + " Kilopondios";
        return out;
      } else {
        out += unit.toString() + " Kilopondios -> ";
        out += unit * 9.80665 + " Newtons";
        return out;
      }
    }
}

~~~

### Clase Logitud
~~~
import {isConvertible} from "./isConvertible";

export enum lengthUnits {MetrosToCentimetros, CentimetrosToMetros}
/**
 * Clase para convertir longitudes
 */
export class Longitud implements isConvertible<lengthUnits> {
    unit: number;
    fromTo: lengthUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = lengthUnits.MetrosToCentimetros;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: lengthUnits): string {
      let out:string = "";
      if (fromTo === lengthUnits.MetrosToCentimetros) {
        out += unit.toString() + " Metros -> ";
        out += unit * 100 + " Centimetros";
        return out;
      } else {
        out += unit.toString() + " Centimetros -> ";
        out += unit / 100 + " Metros";
        return out;
      }
    }
}

~~~

### Clase Masa
~~~
import {isConvertible} from "./isConvertible";

export enum massUnits {KilogramosToGramos, GramosToKilogramos}
/**
 * Clase para convertir masas
 */
export class Masa implements isConvertible<massUnits> {
    unit: number;
    fromTo: massUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = massUnits.KilogramosToGramos;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: massUnits): string {
      let out:string = "";
      if (fromTo === massUnits.KilogramosToGramos) {
        out += unit.toString() + " Kilogramos -> ";
        out += unit * 1000 + " Gramos";
        return out;
      } else {
        out += unit.toString() + " Gramos -> ";
        out += unit / 1000 + " Kilogramos";
        return out;
      }
    }
}

~~~

### Clase Temperatura
~~~
import {isConvertible} from "./isConvertible";

export enum temperatureUnits {CelsiusToFahrenheit, FahrenheitToCelsius}
/**
 * Clase para convertir temperaturas
 */
export class Temperatura implements isConvertible<temperatureUnits> {
    unit: number;
    fromTo: temperatureUnits;
    
    constructor() {
      this.unit = 0;
      this.fromTo = temperatureUnits.CelsiusToFahrenheit;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: temperatureUnits): string {
      let out:string = "";
      if (fromTo === temperatureUnits.CelsiusToFahrenheit) {
        out += unit.toString() + " °C -> ";
        out += (unit * 9/5) + 32 + " °F";
        return out;
      } else {
        out += unit.toString() + " °F -> ";
        out += (unit - 32) * 5/9 + " °C";
        return out;
      }
    }
}

~~~

### Clase Tiempo
~~~
import {isConvertible} from "./isConvertible";

export enum timeUnits {MinutosToSegundos, SegundosToMinutos}
/**
 * Clase para convertir tiempos
 */
export class Tiempo implements isConvertible<timeUnits> {
    unit: number;
    fromTo: timeUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = timeUnits.SegundosToMinutos;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: timeUnits): string {
      let out:string = "";
      if (fromTo === timeUnits.SegundosToMinutos) {
        out += unit.toString() + " Segundos -> ";
        out += unit / 60 + " Minutos";
        return out;
      } else {
        out += unit.toString() + " Minutos -> ";
        out += unit * 60 + " Segundos";
        return out;
      }
    }
}

~~~

### Clase Velocidad
~~~
import {isConvertible} from "./isConvertible";
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum speedUnits {KMpHToMph, MpHToKMpH}

export class Velocidad implements isConvertible<speedUnits> {
    unit: number;
    fromTo: speedUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = speedUnits.KMpHToMph;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: speedUnits): string {
      let out:string = "";
      if (fromTo === speedUnits.KMpHToMph) {
        out += unit.toString() + " KMpH -> ";
        out += unit * 0.621371 + " MpH";
        return out;
      } else {
        out += unit.toString() + " MpH -> ";
        out += unit * 1.60934 + " KMpH";
        return out;
      }
    }
}

~~~

### Clase Volumen
~~~
import {isConvertible} from "./isConvertible";
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum volumeUnits {LitrosToMililitros, MililitrosToLitros}

export class Volumen implements isConvertible<volumeUnits> {
    unit: number;
    fromTo: volumeUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = volumeUnits.LitrosToMililitros;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: volumeUnits): string {
      let out:string = "";
      if (fromTo === volumeUnits.LitrosToMililitros) {
        out += unit.toString() + " Litros -> ";
        out += unit * 1000 + " Mililitros";
        return out;
      } else {
        out += unit.toString() + " Mililitros -> ";
        out += unit / 1000 + " Litros";
        return out;
      }
    }
}

~~~

### Interface IsConvertible
~~~
/**
 * Interfaz generica que permite realizar conversiones entre sistemas
 */
export interface isConvertible<T> {
    unit: number;
    fromTo: T;
    /**
     * Funcion que convierte las unidades
     * @param unit Unidad a convertir
     * @param fromTo Parametro para especificar de que unidad a que unidad
     */
    convert(unit: number, fromTo: T): string;
}

~~~

### Codigo main del ejercicio
~~~
import {Fuerza, forceUnits} from "./fuerza"
import {Masa, massUnits} from "./masa"
import {Tiempo, timeUnits} from "./tiempo"
import {Velocidad, speedUnits} from "./velocidad"
import {Volumen, volumeUnits} from "./volumen"
import {Temperatura, temperatureUnits} from "./temperatura"
import {Longitud, lengthUnits} from "./longitud"

const force: Fuerza = new Fuerza;
const mass: Masa = new Masa;
const time: Tiempo = new Tiempo;
const speed: Velocidad = new Velocidad;
const vol: Volumen = new Volumen;
const temp: Temperatura = new Temperatura;
const length: Longitud = new Longitud;

console.log(force.convert(100, forceUnits.NewtonToKilopondio));
console.log(mass.convert(100, massUnits.GramosToKilogramos));
console.log(time.convert(100, timeUnits.MinutosToSegundos));
console.log(speed.convert(100, speedUnits.KMpHToMph));
console.log(vol.convert(100, volumeUnits.LitrosToMililitros));
console.log(temp.convert(100, temperatureUnits.CelsiusToFahrenheit));
console.log(length.convert(100, lengthUnits.CentimetrosToMetros));
~~~
### Ejercicio muesta por Consola 
~~~
100 Newtons -> 10.197162129999999 Kilopondios
100 Gramos -> 0.1 Kilogramos
100 Minutos -> 6000 Segundos
100 KMpH -> 62.137100000000004 MpH
100 Litros -> 100000 Mililitros
100 °C -> 212 °F
100 Centimetros -> 1 Metros
~~~ 

### TDD
~~~
/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {forceUnits, Fuerza} from '../../src/ejercicio-2/fuerza';
import {lengthUnits, Longitud} from '../../src/ejercicio-2/longitud';
import {Masa, massUnits} from '../../src/ejercicio-2/masa';
import {Temperatura, temperatureUnits} from '../../src/ejercicio-2/temperatura';
import {Tiempo, timeUnits} from '../../src/ejercicio-2/tiempo';
import {speedUnits, Velocidad} from '../../src/ejercicio-2/velocidad';
import {Volumen, volumeUnits} from '../../src/ejercicio-2/volumen';

const force: Fuerza = new Fuerza;
const mass: Masa = new Masa;
const time: Tiempo = new Tiempo;
const speed: Velocidad = new Velocidad;
const vol: Volumen = new Volumen;
const temp: Temperatura = new Temperatura;
const length: Longitud = new Longitud;

// Pruebas
describe('ejercicio 2', () => {
  it('100 newtons son 10.197162129999999 kilopondios', () => {
    expect(force.convert(100, forceUnits.NewtonToKilopondio)).to.be.equal("100 Newtons -> 10.197162129999999 Kilopondios");
  });
  it('100 gramos son 0.1 kilogramos', () => {
    expect(mass.convert(100, massUnits.GramosToKilogramos)).to.be.equal("100 Gramos -> 0.1 Kilogramos");
  });
  it('100 minutos son 6000 segundos', () => {
    expect(time.convert(100, timeUnits.MinutosToSegundos)).to.be.equal("100 Minutos -> 6000 Segundos");
  });
  it('100 km/h son 62.137100000000004 m/h ', () => {
    expect(speed.convert(100, speedUnits.KMpHToMph)).to.be.equal("100 KMpH -> 62.137100000000004 MpH");
  });
  it('100 litros son 100000 Mililitros', () => {
    expect(vol.convert(100, volumeUnits.LitrosToMililitros)).to.be.equal("100 Litros -> 100000 Mililitros");
  });
  it('100 °C son 212 °F', () => {
    expect(temp.convert(100, temperatureUnits.CelsiusToFahrenheit)).to.be.equal("100 °C -> 212 °F");
  });
  it('100 centimetros son 1 metro', () => {
    expect(length.convert(100, lengthUnits.CentimetrosToMetros)).to.be.equal("100 Centimetros -> 1 Metros");
  });
});

    
~~~

### Devuelve :
~~~
  ejercicio 2
    ✓ 100 newtons son 10.197162129999999 kilopondios
    ✓ 100 gramos son 0.1 kilogramos
    ✓ 100 minutos son 6000 segundos
    ✓ 100 km/h son 62.137100000000004 m/h 
    ✓ 100 litros son 100000 Mililitros
    ✓ 100 °C son 212 °F
    ✓ 100 centimetros son 1 metro
~~~


# Ejercicio 3 - DSIflix

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
Tendrá que extender dicha clase abstracta para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

## Código :
### Clase BasicStreamableCollection
~~~
/* eslint-disable max-len */
import {search, SearchableItem} from './searchable';
/**
 * Clase abstracta basic
 */
export abstract class BasicStreamableCollection<T> implements SearchableItem<T> {
  /**
   * Constructor de la clase abstracta basic
   * @param items Arreglo de items
   */
  constructor(protected items: T[]) { }
  /**
   * Funcion abstracta para buscar
   * @param by Parametro de busqueda
   */
  abstract searchBy(by: search, equal: T): T[];
  /**
   * Funcion para agregar items
   * @param newItem Nuevo item
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  /**
   * Funcion para obtener todos los items de la coleccion
   * @returns Arreglo con todos los items
   */
  getItems(): T[] {
    return this.items;
  }
  /**
   * Funcion para obtener el numero de items de la coleccion
   * @returns Numero de items
   */
  getNumberOfItems(): number {
    return this.items.length;
  }
}

~~~

### Clase documentales
~~~
/* eslint-disable max-len */
import {BasicStreamableCollection} from "./basic";
import {search} from "./searchable";
/**
 * Tipo de dato para representar caracteristicas de un documental
 */
export type documental = {
    titulo: string;
    año: number;
    duracion: number;
    genero: string;
    clasificacion: string;
}
/**
 * Clase para representar documentales
 */
export class Documentales extends BasicStreamableCollection<documental | number | string> {
  /**
   * Constructor de la clase
   * @param items Arreglo de documentales
   */
  constructor(protected items: documental[]) {
    super(items);
  }
  /**
   * Funcion de busqueda segun un parametro de entrada
   * @param by Tipo de busqueda
   * @param equal Palabra o numero buscado
   * @returns Arreglo con el resultado de la busqueda
   */
  searchBy(by: search, equal: number | string): documental[] {
    const out: documental[] = [];
    if (by === search.Año) {
      this.items.forEach((item) => {
        if (equal === item.año) {
          out.push(item);
        }
      });
    }
    if (by === search.Titulo) {
      this.items.forEach((item) => {
        if (equal === item.titulo) {
          out.push(item);
        }
      });
    }
    if (by === search.Clasificacion) {
      this.items.forEach((item) => {
        if (equal === item.clasificacion) {
          out.push(item);
        }
      });
    }
    return out;
  }
}

~~~
### Clase peliculas
~~~
/* eslint-disable max-len */
import {BasicStreamableCollection} from "./basic";
import {search} from "./searchable";
/**
 * Tipo de dato para representar caracteristicas de una pelicula
 */
export type pelicula = {
    titulo: string;
    año: number;
    duracion: number;
    genero: string;
    clasificacion: string;
}
/**
 * Clase para representar peliculas
 */
export class Peliculas extends BasicStreamableCollection<pelicula | string | number> {
  /**
   * Constructor de la clase
   * @param items Arreglo de peliculas
   */
  constructor(protected items: pelicula[]) {
    super(items);
  }
  /**
   * Funcion de busqueda segun un parametro de entrada
   * @param by Tipo de busqueda
   * @param equal Palabra o numero buscado
   * @returns Arreglo con el resultado de la busqueda
   */
  searchBy(by: search, equal: number | string): pelicula[] {
    const out: pelicula[] = [];
    if (by === search.Año) {
      this.items.forEach((item) => {
        if (equal === item.año) {
          out.push(item);
        }
      });
    }
    if (by === search.Titulo) {
      this.items.forEach((item) => {
        if (equal === item.titulo) {
          out.push(item);
        }
      });
    }
    if (by === search.Clasificacion) {
      this.items.forEach((item) => {
        if (equal === item.clasificacion) {
          out.push(item);
        }
      });
    }
    return out;
  }
}

~~~

### Clase Series
~~~
import {BasicStreamableCollection} from "./basic";
import {search} from "./searchable";
/**
 * Tipo de dato para representar caracteristicas de una serie
 */
export type serie = {
    titulo: string;
    año: number;
    temporadas: number;
    episodios: number;
    genero: string;
    clasificacion: string;
}
/**
 * Clase para representar series
 */
export class Series extends BasicStreamableCollection<serie | number | string> {
  /**
   * Constructor de la clase
   * @param items Arreglo de series
   */
  constructor(protected items: serie[]) {
    super(items);
  }
  /**
   * Funcion de busqueda segun un parametro de entrada
   * @param by Tipo de busqueda
   * @param equal Palabra o numero buscado
   * @returns Arreglo con el resultado de la busqueda
   */
  searchBy(by: search, equal: number | string): serie[] {
    const out: serie[] = [];
    if (by === search.Año) {
      this.items.forEach((item) => {
        if (equal === item.año) {
          out.push(item);
        }
      });
    }
    if (by === search.Titulo) {
      this.items.forEach((item) => {
        if (equal === item.titulo) {
          out.push(item);
        }
      });
    }
    if (by === search.Clasificacion) {
      this.items.forEach((item) => {
        if (equal === item.clasificacion) {
          out.push(item);
        }
      });
    }
    return out;
  }
}

~~~
### Interface Streamble
~~~
/**
 * Interfaz generica para crear una coleccion de items streamables
 */
export interface Streamable<T> {
    /**
     * Funcion para agregar items a la coleccion
     * @param newItem Nuevo item
     */
    addItem(newItem: T): void;
    /**
     * Funcion para obtener los items de la coleccion
     */
    getItems(): T[];
    /**
     * Funcion para obtener el numero de items en la coleccion
     */
    getNumberOfItems(): number;
}

~~~

### Interface Searchable
~~~
import {Streamable} from "./streamable";
/**
 * Enumerable con los parametros posibles para las busquedas
 */
export enum search {Año, Titulo, Clasificacion}
/**
 * Interfaz generica que implementa la funcion searchBy
 */
export interface SearchableItem<T> extends Streamable<T> {
    /**
     * Funcion para buscar items
     * @param by Parametro de busqueda
     */
    searchBy(by: search, equal: T): T[];
}

~~~

### Codigo main del ejercicio
~~~
import {serie, Series} from './series';
import {documental, Documentales} from './documentales';
import {pelicula, Peliculas} from './peliculas';
import {search} from './searchable';


const Reeks: Series = new Series([]);
const Films: Peliculas = new Peliculas([]);
const Documentaries: Documentales = new Documentales([]);

// Series
const got: serie = {titulo: "Game of Thrones",
  año: 2011,
  temporadas: 8,
  episodios: 73,
  genero: "Accion",
  clasificacion: "B"};
Reeks.addItem(got);

const Peaky: serie = {titulo: "Peaky Blinders",
  año: 2013,
  temporadas: 5,
  episodios: 30,
  genero: "Accion",
  clasificacion: "B"};
Reeks.addItem(Peaky);

const MonsterHunter: pelicula = {titulo: "Monster Hunter",
  año: 2020,
  duracion: 104,
  genero: "Fantasia",
  clasificacion: "B"};
Films.addItem(MonsterHunter);

const Crack: documental = {titulo: "Crack: Cocaina, Corrupción y conspiración",
  año: 2021,
  duracion: 89,
  genero: "Sociocultural",
  clasificacion: "C"};
Documentaries.addItem(Crack);
console.log("Numero de series registradas");
console.log(Reeks.getNumberOfItems());
console.log("Peliculas registradas");
console.log(Films.getItems());
console.log("Busqueda de documentales por clasificacion");
console.log(Documentaries.searchBy(search.Clasificacion, "C"));
console.log("Busqueda de peliculas por titulo");
console.log(Films.searchBy(search.Titulo, "Monster Hunter"));

~~~

### Muestra por consola
~~~
1:22:42 - Found 0 errors. Watching for file changes.
Numero de series registradas
2
Peliculas registradas
[
  {
    titulo: 'Monster Hunter',
    'año': 2020,
    duracion: 104,
    genero: 'Fantasia',
    clasificacion: 'B'
  }
]
Busqueda de documentales por clasificacion
[
  {
    titulo: 'Crack: Cocaina, Corrupción y conspiración',
    'año': 2021,
    duracion: 89,
    genero: 'Sociocultural',
    clasificacion: 'C'
  }
]
Busqueda de peliculas por titulo
[
  {
    titulo: 'Monster Hunter',
    'año': 2020,
    duracion: 104,
    genero: 'Fantasia',
    clasificacion: 'B'
  }
]
~~~

### TDD
~~~
/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {serie, Series} from '../../src/ejercicio-3/series';
import {documental, Documentales} from '../../src/ejercicio-3/documentales';
import {pelicula, Peliculas} from '../../src/ejercicio-3/peliculas';
import {search} from '../../src/ejercicio-3/searchable';

const Reeks: Series = new Series([]);
const Films: Peliculas = new Peliculas([]);
const Documentaries: Documentales = new Documentales([]);

// Series
const got: serie = {titulo: "Game of Thrones",
  año: 2011,
  temporadas: 8,
  episodios: 73,
  genero: "Accion",
  clasificacion: "B"};
Reeks.addItem(got);

const Peaky: serie = {titulo: "Peaky Blinders",
  año: 2013,
  temporadas: 5,
  episodios: 30,
  genero: "Accion",
  clasificacion: "B"};
Reeks.addItem(Peaky);

// Peliculas
const Titanic: pelicula = {titulo: "Godzilla vs. Kong",
  año: 1997,
  duracion: 195,
  genero: "Drama",
  clasificacion: "B"};
Films.addItem(Titanic);

const MonsterHunter: pelicula = {titulo: "Monster Hunter",
  año: 2020,
  duracion: 104,
  genero: "Fantasia",
  clasificacion: "B"};
Films.addItem(MonsterHunter);

// Documentales
const KimDotcom: documental = {titulo: "Kim Dotcom: Caught in the Web",
  año: 2017,
  duracion: 108,
  genero: "Suspenso",
  clasificacion: "A"};
Documentaries.addItem(KimDotcom);

const Crack: documental = {titulo: "Crack: Cocaina, Corrupción y conspiración",
  año: 2021,
  duracion: 89,
  genero: "Sociocultural",
  clasificacion: "C"};
Documentaries.addItem(Crack);

// Pruebas
describe('ejercicio 3', () => {
  it('El numero de series es 2', () => {
    expect(Reeks.getNumberOfItems()).to.be.equal(2);
  });
  it('El nombre de las peliculas son Titanic y MonsterHunter', () => {
    expect(Films.getItems()).to.deep.equal([Titanic, MonsterHunter]);
  });
  it('La busqueda de documentales por el año 2017 devuelve kimdotcom', () => {
    expect(Documentaries.searchBy(search.Año, 2017)).to.deep.equal([KimDotcom]);
  });
  it('La busqueda de documentales por el titulo Crack: Cocaina, Corrupción y conspiración devuelve crack', () => {
    expect(Documentaries.searchBy(search.Titulo, "Crack: Cocaina, Corrupción y conspiración")).to.deep.equal([Crack]);
  });
  it('La busqueda de peliculas por la clasificacion AA devuelve titanic y monster hunter', () => {
    expect(Films.searchBy(search.Clasificacion, "B")).to.deep.equal([Titanic, MonsterHunter]);
  });
});
~~~
### Devuelve :
~~~
  ejercicio 3
    ✓ El numero de series es 2
    ✓ El nombre de las peliculas son Titanic y MonsterHunter
    ✓ La busqueda de documentales por el año 2017 devuelve kimdotcom
    ✓ La busqueda de documentales por el titulo Crack: Cocaina, Corrupción y conspiración devuelve crack
    ✓ La busqueda de peliculas por la clasificacion AA devuelve titanic y monster hunter
~~~

# Conclusión

En esta práctica profundizamos los conocimientos en el lenguaje Typescript haciendo diferentes ejercicios he intentando aplicar lo aprendido en clase con respecto al manejo de clases e interfaces genéricas, como tambien practicamos la implementacion de los principios SOLID de diseño orientado a objetos. Por otro lado se aplico la metodologia TDD o BDD para hacer pruebas unitarias y verificar el correcto funcionamiento de cada uno de los ejercicios ademas de usar la herramienta Instabul para obtener informes sobre el cubrimientos del codigo fuente en base a las pruebas diseñadas.

# Bibliografía


- [Guión de la práctica](https://ull-esit-inf-dsi-2021.github.io/prct06-generics-solid/)
- [Communicating using Markdown](https://lab.github.com/githubtraining/communicating-using-markdown)
- [Mozilla developer js](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Apuntes de asignatura](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/)