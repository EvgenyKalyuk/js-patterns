import constructorPattern from '../index';

describe('constructor pattern', () => {
    const instance = constructorPattern.getInstance();

    it('call public method', () => {
       expect(instance.publicMethod()).toBe('this is public method');
    });

    it('call public property', () => {
        expect(instance.publicProperty).toBe('this is public property');
    });

    it('check private method', () => {
        // @ts-ignore
        expect(instance.privateMethod).toBeUndefined();
    });

    it('check private property', () => {
        // @ts-ignore
        expect(instance.privateProperty).toBeUndefined();
    });
});
