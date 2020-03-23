import UnitFactory from '../index';

describe('hero factory', () => {
    const unitFactory = new UnitFactory();

    it('create hero', () => {
        const superman = unitFactory.createUnit({
            type: 'hero',
            health: 60,
            name: 'superman'
        });

        expect(superman.attacked(40)).toBe(20);
        expect(superman.heal(80)).toBe(100);
        expect(superman.attacked(150)).toBe(0);
        expect(superman.heal(200)).toBe(100);
    });

    it('create villain', () => {
        const joker = unitFactory.createUnit({
            type: 'villain',
            health: 60,
            name: 'joker'
        });

        expect(joker.attacked(50)).toBe(10);
        expect(joker.rampage()).toBe(90);
        expect(joker.attacked(150)).toBe(0);
        expect(joker.heal(200)).toBe(100);
    });
});
