import { WoodenHouse } from '../wooden-house';
import { BrickHouse } from '../brick-house';

describe('pattern template: house', () => {
    it('build wooden house', () => {
       const woodenHouse = new WoodenHouse();

       expect(woodenHouse.buildPillars()).toBe('Build pillars for wooden house');
       expect(woodenHouse.buildWalls()).toBe('Build walls for wooden house');
       expect(woodenHouse.buildHouse()).toBe('Build house');
    });

    it('build brick house', () => {
        const brickHouse = new BrickHouse();

        expect(brickHouse.buildPillars()).toBe('Build pillars for brick house');
        expect(brickHouse.buildWalls()).toBe('Build walls for brick house');
        expect(brickHouse.buildHouse()).toBe('Build house');
    });
});
