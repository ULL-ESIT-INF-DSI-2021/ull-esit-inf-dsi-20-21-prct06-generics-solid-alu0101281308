/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {forceUnits, Fuerza} from '../../src/ejercicio-2/fuerza';
import {lengthUnits, Longitud} from '../../src/ejercicio-2/longitud';
import {Masa, massUnits} from '../../src/ejercicio-2/masa';
import {Temperatura, temperatureUnits} from '../../src/ejercicio-2/temperatura';
import {Tiempo, timeUnits} from '../../src/ejercicio-2/tiempo';
import {speedUnits, Velocidad} from '../../src/ejercicio-2/velocidad';
import {Volumen, volumeUnits} from '../../src/ejercicio-2/volumen';

const force: Fuerza = new Fuerza;
const mass: Masa = new Masa;
const time: Tiempo = new Tiempo;
const speed: Velocidad = new Velocidad;
const vol: Volumen = new Volumen;
const temp: Temperatura = new Temperatura;
const length: Longitud = new Longitud;

// Pruebas
describe('ejercicio 2', () => {
  it('100 newtons son 10.197162129999999 kilopondios', () => {
    expect(force.convert(100, forceUnits.NewtonToKilopondio)).to.be.equal("100 Newtons -> 10.197162129999999 Kilopondios");
  });
  it('100 gramos son 0.1 kilogramos', () => {
    expect(mass.convert(100, massUnits.GramosToKilogramos)).to.be.equal("100 Gramos -> 0.1 Kilogramos");
  });
  it('100 minutos son 6000 segundos', () => {
    expect(time.convert(100, timeUnits.MinutosToSegundos)).to.be.equal("100 Minutos -> 6000 Segundos");
  });
  it('100 km/h son 62.137100000000004 m/h ', () => {
    expect(speed.convert(100, speedUnits.KMpHToMph)).to.be.equal("100 KMpH -> 62.137100000000004 MpH");
  });
  it('100 litros son 100000 Mililitros', () => {
    expect(vol.convert(100, volumeUnits.LitrosToMililitros)).to.be.equal("100 Litros -> 100000 Mililitros");
  });
  it('100 °C son 212 °F', () => {
    expect(temp.convert(100, temperatureUnits.CelsiusToFahrenheit)).to.be.equal("100 °C -> 212 °F");
  });
  it('100 centimetros son 1 metro', () => {
    expect(length.convert(100, lengthUnits.CentimetrosToMetros)).to.be.equal("100 Centimetros -> 1 Metros");
  });
});
