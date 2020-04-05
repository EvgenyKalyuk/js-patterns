import { Adapter, Adaptee } from '../index'

describe('adapter pattern', () => {
    it('check adapter', () => {
        const adaptee = new Adaptee();
        const adapter = new Adapter(adaptee);

        expect(adapter.request()).toBe('adapter: special request');
    });
});
