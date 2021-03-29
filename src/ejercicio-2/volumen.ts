import {isConvertible} from "./isConvertible";
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum volumeUnits {LitrosToMililitros, MililitrosToLitros}

export class Volumen implements isConvertible<volumeUnits> {
    unit: number;
    fromTo: volumeUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = volumeUnits.LitrosToMililitros;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: volumeUnits): string {
      let out:string = "";
      if (fromTo === volumeUnits.LitrosToMililitros) {
        out += unit.toString() + " Litros -> ";
        out += unit * 1000 + " Mililitros";
        return out;
      } else {
        out += unit.toString() + " Mililitros -> ";
        out += unit / 1000 + " Litros";
        return out;
      }
    }
}
