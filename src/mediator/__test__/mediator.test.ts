import Mediator from '../index';

describe('mediator', () => {
    const mediator = new Mediator();

    it('check subscribe and publish', () => {
        const fn = jest.fn((publishArg) => {
            expect(publishArg).toBe('test arg');
        });

        mediator.subscribe('test', fn);
        mediator.publish('test', 'test arg');
    });
});
