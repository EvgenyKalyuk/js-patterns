import { Coffee, withMilkDecorator, withSyrupDecorator } from '../index';

describe('decorator pattern', () => {
    it('coffee with milk', () => {
        const coffee = withMilkDecorator(new Coffee());

        expect(coffee.cost).toBe(1.5);
    });

    it('coffee with syrup', () => {
        const coffee = withSyrupDecorator(new Coffee());

        expect(coffee.cost).toBe(1.2);
    });
});
