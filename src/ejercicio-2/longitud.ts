import {isConvertible} from "./isConvertible";

export enum lengthUnits {MetrosToCentimetros, CentimetrosToMetros}
/**
 * Clase para convertir longitudes
 */
export class Longitud implements isConvertible<lengthUnits> {
    unit: number;
    fromTo: lengthUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = lengthUnits.MetrosToCentimetros;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: lengthUnits): string {
      let out:string = "";
      if (fromTo === lengthUnits.MetrosToCentimetros) {
        out += unit.toString() + " Metros -> ";
        out += unit * 100 + " Centimetros";
        return out;
      } else {
        out += unit.toString() + " Centimetros -> ";
        out += unit / 100 + " Metros";
        return out;
      }
    }
}
