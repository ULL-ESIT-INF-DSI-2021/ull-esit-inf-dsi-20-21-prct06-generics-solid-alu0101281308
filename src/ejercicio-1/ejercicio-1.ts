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