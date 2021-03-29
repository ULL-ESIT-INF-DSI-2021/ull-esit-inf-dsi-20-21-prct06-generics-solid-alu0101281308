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
