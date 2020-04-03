export const trafficSignals = {
    red: 'stop',
    yellow: 'attention',
    green: 'go'
};

class Light {
    constructor(private light: string) {
    }

    sign(): string {
        throw 'Set sign method';
    }
}

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return trafficSignals.red;
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        return trafficSignals.yellow;
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        return trafficSignals.green;
    }
}

export class TrafficLights {
    private readonly states: Array<Light>;
    private current: Light;

    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ];
        this.current = this.states[0];
    }

    change() {
        let currentIndex = this.states.indexOf(this.current);

        if (++currentIndex < this.states.length) {
            this.current = this.states[currentIndex];
        } else {
            this.current = this.states[0];
        }
    }

    sign(): string {
        return this.current.sign();
    }
}
