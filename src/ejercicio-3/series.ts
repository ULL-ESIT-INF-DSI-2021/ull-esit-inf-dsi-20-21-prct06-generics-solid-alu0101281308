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
