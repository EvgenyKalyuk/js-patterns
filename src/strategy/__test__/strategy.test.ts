import { Context } from '../index';
import { StrategyReverse } from '../strategy-reverse';
import { StrategySort } from '../strategy-sort';

describe('strategy pattern', () => {
    it('use strategy reverse', () => {
        const context = new Context(new StrategyReverse());
        const args = ['a', 'b', 'c'];
        const result = context.doSomeLogic([...args]);

        expect(result).toStrictEqual(args.reverse());
    });

    it('use strategy sort', () => {
        const context = new Context(new StrategySort());
        const args = ['a', 'b', 'c'];
        const result = context.doSomeLogic([...args]);

        expect(result).toStrictEqual(args.sort());
    });
});
