import { Singleton } from '../index';

describe('singleton pattern', () => {
    it('check error', () => {
        new Singleton();

        try {
            new Singleton();
        } catch (error) {
            expect(error).toStrictEqual(new Error('already initialized'))
        }
    });

    it('check getInstance', () => {
        const singletonInstanceOne = Singleton.getInstance();
        const singletonInstanceTwo = Singleton.getInstance();

        expect(singletonInstanceOne === singletonInstanceTwo).toBeTruthy();
    });
});
