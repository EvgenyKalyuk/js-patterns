import { ConcreteBuilder, Director } from '../index';

describe('builder pattern', () => {
    it('build minimal product', () => {
        const builder = new ConcreteBuilder();
        const director = new Director(builder);

        director.buildMinimalProduct();

        expect(builder.getProduct().parts).toStrictEqual(['part-a']);
    });

    it('build max product', () => {
       const builder = new ConcreteBuilder();
       const director = new Director(builder);

       director.buildMaxProduct();

       expect(builder.getProduct().parts).toStrictEqual(['part-a', 'part-b', 'part-c']);
    });
});
