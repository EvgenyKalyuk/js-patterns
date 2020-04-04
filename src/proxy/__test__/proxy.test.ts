import { proxiedFetch } from '../index';

describe('proxy pattern', () => {
    it('check response from cache', () => {
        const url = 'test';
        const result = proxiedFetch(url);
        const resultFromCache = proxiedFetch(url);

        expect(result).toBe(`${url} 200`);
        expect(resultFromCache).toBe(`${url} 301`);
    });
});
