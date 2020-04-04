import { CarFactory, Car } from '../index';

describe('flyweight pattern', () => {
    it('car factory', () => {
        const carFactory = new CarFactory();

        carFactory.create('audi', 100);
        carFactory.create('bmw', 100);

        expect(carFactory.create('audi', 120)).toStrictEqual(new Car('audi', 100));
        expect(carFactory.create('bmw', 120)).toStrictEqual(new Car('bmw', 100));
    });
});
