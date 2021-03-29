import {isConvertible} from "./isConvertible";
/**
 * Enumerable para las distintas conversiones disponibles
 */
export enum speedUnits {KMpHToMph, MpHToKMpH}

export class Velocidad implements isConvertible<speedUnits> {
    unit: number;
    fromTo: speedUnits;
    constructor() {
      this.unit = 0;
      this.fromTo = speedUnits.KMpHToMph;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: speedUnits): string {
      let out:string = "";
      if (fromTo === speedUnits.KMpHToMph) {
        out += unit.toString() + " KMpH -> ";
        out += unit * 0.621371 + " MpH";
        return out;
      } else {
        out += unit.toString() + " MpH -> ";
        out += unit * 1.60934 + " KMpH";
        return out;
      }
    }
}
