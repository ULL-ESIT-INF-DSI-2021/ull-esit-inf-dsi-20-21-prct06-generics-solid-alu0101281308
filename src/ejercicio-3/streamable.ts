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
