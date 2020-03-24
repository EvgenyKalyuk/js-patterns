type Channels = {
    [key: string]: Array<Function>;
}

export default class Mediator {
    public channels: Channels = {};

    public subscribe(channel: string, fn: Function): Mediator {
        if (!this.channels[channel]) {
            this.channels[channel] = [fn];
        } else {
            this.channels[channel].push(fn);
        }

        return this;
    }

    public publish(channel: string, ...args: any[]): Mediator {
        if (!this.channels[channel]) {
            return this;
        }

        this.channels[channel].forEach(channelFn => channelFn(...args));

        return this;
    }

    public installTo(obj: any) {
        obj.subscribe = this.subscribe;
        obj.publish = this.publish;
    }
}
