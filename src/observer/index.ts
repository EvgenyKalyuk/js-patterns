type EventFunction<Data = string> = (data: Data ) => void;

export default class Observer<EventData> {
    private observerList: Array<EventFunction<EventData>> = [];

    public subscribe(observer: EventFunction<EventData>): void {
        this.observerList.push(observer);
    }

    public unsubscribe(observer: EventFunction<EventData>): void {
        this.observerList = this.observerList.filter(
            (observerFn) => observerFn !== observer
        );
    }

    public broadcast(data: EventData) {
        this.observerList.forEach(observer => observer(data));
    }
}
