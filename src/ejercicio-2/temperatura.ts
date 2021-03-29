import {isConvertible} from "./isConvertible";

export enum temperatureUnits {CelsiusToFahrenheit, FahrenheitToCelsius}
/**
 * Clase para convertir temperaturas
 */
export class Temperatura implements isConvertible<temperatureUnits> {
    unit: number;
    fromTo: temperatureUnits;
    
    constructor() {
      this.unit = 0;
      this.fromTo = temperatureUnits.CelsiusToFahrenheit;
    }
    /**
     * Funcion que calcula la conversion segun los parametros recibidos
     * @param unit Valor de la unidad a convertir
     * @param fromTo Unidades a las que se desea convertir
     * @returns Un string que el resultado de la conversion
     */
    convert(unit: number, fromTo: temperatureUnits): string {
      let out:string = "";
      if (fromTo === temperatureUnits.CelsiusToFahrenheit) {
        out += unit.toString() + " °C -> ";
        out += (unit * 9/5) + 32 + " °F";
        return out;
      } else {
        out += unit.toString() + " °F -> ";
        out += (unit - 32) * 5/9 + " °C";
        return out;
      }
    }
}
