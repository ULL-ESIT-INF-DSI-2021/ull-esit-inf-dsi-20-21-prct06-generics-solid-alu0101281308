import {isConvertible} from "./isConvertible";

export enum forceUnits {NewtonToKilopondio, KilopondioToNewton}
/**
 * Clase para convertir fuerzas
 */
export class Fuerza implements isConvertible<forceUnits> {
    unit: number;
    fromTo: forceUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = forceUnits.NewtonToKilopondio;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: forceUnits): string {
      let out:string = "";
      if (fromTo === forceUnits.NewtonToKilopondio) {
        out += unit.toString() + " Newtons -> ";
        out += unit * 0.1019716213 + " Kilopondios";
        return out;
      } else {
        out += unit.toString() + " Kilopondios -> ";
        out += unit * 9.80665 + " Newtons";
        return out;
      }
    }
}
