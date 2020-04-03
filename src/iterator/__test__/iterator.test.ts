import { Iterator } from '../index';

describe('iterator pattern', () => {
    const data = ['this', 'is', 'iterator'];

    it('check for of', () => {
        const iterator = new Iterator(data);
        let index = 0;

        for (let value of iterator) {
            expect(value).toBe(data[index++]);
        }
    });
});
