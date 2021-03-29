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
