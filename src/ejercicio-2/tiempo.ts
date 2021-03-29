import {isConvertible} from "./isConvertible";

export enum timeUnits {MinutosToSegundos, SegundosToMinutos}
/**
 * Clase para convertir tiempos
 */
export class Tiempo implements isConvertible<timeUnits> {
    unit: number;
    fromTo: timeUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = timeUnits.SegundosToMinutos;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: timeUnits): string {
      let out:string = "";
      if (fromTo === timeUnits.SegundosToMinutos) {
        out += unit.toString() + " Segundos -> ";
        out += unit / 60 + " Minutos";
        return out;
      } else {
        out += unit.toString() + " Minutos -> ";
        out += unit * 60 + " Segundos";
        return out;
      }
    }
}
