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
