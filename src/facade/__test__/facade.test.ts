import CreditFacade from '../index';

describe('credit facade', () => {
    const creditFacade = new CreditFacade('John');

    it('small amount', () => {
        expect(creditFacade.applyFor(10)).toBeTruthy();
    });

    it('big amount', () => {
       expect(creditFacade.applyFor(999)).toBeFalsy();
    });
});
