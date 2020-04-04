import { AndExpression, OrExpression, TerminalExpression } from '../index';

describe('interpreter pattern', () => {
    it('use expression', () => {
       const getMaleExpression = () => {
           const robert = new TerminalExpression('Robert');
           const john = new TerminalExpression('John');

           return new OrExpression(robert, john);
       };
       const getMarriedWomenStatus = () => {
            const julia = new TerminalExpression('Julia');
            const married = new TerminalExpression('married');

            return new AndExpression(julia, married);
       };

       expect(getMaleExpression().interpreter('John')).toBeTruthy();
       expect(getMaleExpression().interpreter('Bob')).toBeFalsy();
       expect(getMarriedWomenStatus().interpreter('Julia married')).toBeTruthy();
       expect(getMarriedWomenStatus().interpreter('Alice married')).toBeFalsy();
    });
});
