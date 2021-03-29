import 'mocha';
import {expect} from 'chai';
import {Fighter, universo} from '../../src/ejercicio-1/fighter';
import {Pokemon, elemento} from '../../src/ejercicio-1/pokemon';
import {DC} from '../../src/ejercicio-1/dc';
import {Marvel, raza} from '../../src/ejercicio-1/marvel';
import {Combat} from '../../src/ejercicio-1/combat';
import {Enciclopedia} from '../../src/ejercicio-1/enciclopedia';
import {FighterPrint} from '../../src/ejercicio-1/fighterprint'
import {EfectividadDeAtaque} from '../../src/ejercicio-1/efectividaddeataque'

describe('ejercicio 1', () => {

    let pikachu = new Pokemon("Pikachu", 6.0, 0.4, 1000, 55, 40, 90, "Pika pika", universo.pokemon, elemento.Electrico);
    let joker = new DC("Joker", 70, 1.80, 650, 100, 20, 60, "HAHAHAHAHAHA", universo.dc);
    let thor = new Marvel("Thor", 90, 2.00, 1000, 150, 150, 100, "Probaras los rayos de mi martillo", universo.marvel, raza.Deidad);

    let encuentro = new Combat(thor, joker)
    let enciclopedia = new Enciclopedia([joker, pikachu, thor]);

    it('pikachu es un objeto de tipo Pokemon', () => {
        expect(pikachu instanceof Pokemon).to.be.equal(true);
    });

    it('pikachu es un objeto de tipo Fighter', () => {
        expect(pikachu instanceof Fighter).to.be.equal(true);
    });

    it('enciclopedia es un objeto de tipo Enciclopedia', () => {
        expect(enciclopedia instanceof Enciclopedia).to.be.equal(true);
    });

    it('encuentro es un objeto de tipo Combat', () => {
        expect(encuentro instanceof Combat).to.be.equal(true);
    });

    it('El daño que recibe thor de el joker es ', () => {
        let daño = new EfectividadDeAtaque().calcularDaño(joker.universo, joker.ataque, thor.universo, thor.defensa);
        expect(daño).to.be.equal(66.66666666666666);
    });

    it('El ganador de un combarte entre thor y el joker es thor.', () => {
        expect(encuentro.start().nombre).to.be.equal("Thor");
    });

});