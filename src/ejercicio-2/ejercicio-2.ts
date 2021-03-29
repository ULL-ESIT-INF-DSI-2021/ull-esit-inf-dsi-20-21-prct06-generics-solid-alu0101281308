import {Fuerza, forceUnits} from "./fuerza"
import {Masa, massUnits} from "./masa"
import {Tiempo, timeUnits} from "./tiempo"
import {Velocidad, speedUnits} from "./velocidad"
import {Volumen, volumeUnits} from "./volumen"
import {Temperatura, temperatureUnits} from "./temperatura"
import {Longitud, lengthUnits} from "./longitud"

const force: Fuerza = new Fuerza;
const mass: Masa = new Masa;
const time: Tiempo = new Tiempo;
const speed: Velocidad = new Velocidad;
const vol: Volumen = new Volumen;
const temp: Temperatura = new Temperatura;
const length: Longitud = new Longitud;

console.log(force.convert(100, forceUnits.NewtonToKilopondio));
console.log(mass.convert(100, massUnits.GramosToKilogramos));
console.log(time.convert(100, timeUnits.MinutosToSegundos));
console.log(speed.convert(100, speedUnits.KMpHToMph));
console.log(vol.convert(100, volumeUnits.LitrosToMililitros));
console.log(temp.convert(100, temperatureUnits.CelsiusToFahrenheit));
console.log(length.convert(100, lengthUnits.CentimetrosToMetros));