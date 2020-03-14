import Observer from '../index';

describe('observer pattern', () => {
    it('create observer and subscribe', () => {
        const event = 'test';
        const observer = new Observer<string>();

        observer.subscribe((data) => {
           expect(data).toBe(event);
       });
        observer.broadcast(event);
    });
});
