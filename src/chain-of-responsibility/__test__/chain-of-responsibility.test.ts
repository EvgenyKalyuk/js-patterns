import { Request } from '../index';

describe('chain of responsibility', () => {
    it('request', () => {
       const request = new Request(100);

       request.getBill(10).getBill(5).getBill(5);

       expect(request.amount).toBe(80);
    });
});
