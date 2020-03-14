type SubscribersType = {
    [key: string]: Array<Function>;
}

type SubscribeResultType = {
    unsubscribe: () => void
}

export default class PubSub {
    private subscribers: SubscribersType = {};

    public subscribe<Subscriber extends Function>(event: string, callBack: Subscriber) {
        let subscriberIndex: number = 0;

        if (!this.subscribers[event]) {
            this.subscribers[event] = [callBack];
        } else {
            subscriberIndex = this.subscribers[event].push(callBack) - 1;
        }

        return {
            unsubscribe: () => {
                this.subscribers[event].splice(subscriberIndex, 1);
            }
        }
    }

    public publish<DataType>(event: string, data: DataType) {
        this.subscribers[event].forEach(subscriber => subscriber(data));
    }
}
