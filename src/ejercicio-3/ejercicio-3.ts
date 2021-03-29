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

console.log(Reeks.getNumberOfItems());
console.log(Films.getItems());
console.log(Documentaries.searchBy(search.Clasificacion, "C"));
console.log(Films.searchBy(search.Titulo, "Monster Hunter"));
