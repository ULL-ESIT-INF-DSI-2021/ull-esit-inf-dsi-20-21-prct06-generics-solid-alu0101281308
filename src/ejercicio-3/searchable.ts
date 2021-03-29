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
