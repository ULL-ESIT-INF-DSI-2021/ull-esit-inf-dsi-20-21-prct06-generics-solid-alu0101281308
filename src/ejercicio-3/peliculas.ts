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
