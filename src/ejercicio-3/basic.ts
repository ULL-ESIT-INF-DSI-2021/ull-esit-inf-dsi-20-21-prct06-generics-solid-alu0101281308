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
