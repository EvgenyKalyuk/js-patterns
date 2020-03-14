import PubSub from '../index';

type SubscriberType = (data: string) => void;

describe('pubsub pattern', () => {
    it('subscribe and publish', () => {
        const eventName = 'test';
        const testData = 'test data';
        const pubSub = new PubSub();

        pubSub.subscribe<SubscriberType>(eventName, (data) => {
            expect(data).toBe(testData);
        });

        pubSub.publish<string>(eventName, testData);
    });

    it('unsubscribe', () => {
        const subscriber = jest.fn();
        const eventName = 'test';
        const pubSub = new PubSub();
        const subscribeData = pubSub.subscribe(eventName, subscriber);

        subscribeData.unsubscribe();
        pubSub.publish<string>(eventName, 'test');

        expect(subscriber).toBeCalledTimes(0);
    });
});
