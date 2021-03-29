import {isConvertible} from "./isConvertible";

export enum massUnits {KilogramosToGramos, GramosToKilogramos}
/**
 * Clase para convertir masas
 */
export class Masa implements isConvertible<massUnits> {
    unit: number;
    fromTo: massUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = massUnits.KilogramosToGramos;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: massUnits): string {
      let out:string = "";
      if (fromTo === massUnits.KilogramosToGramos) {
        out += unit.toString() + " Kilogramos -> ";
        out += unit * 1000 + " Gramos";
        return out;
      } else {
        out += unit.toString() + " Gramos -> ";
        out += unit / 1000 + " Kilogramos";
        return out;
      }
    }
}
