class Target {
    public request(): string {
        return 'target: default';
    }
}

export class Adaptee {
    public specialRequest(): string {
        return 'tseuqer laiceps';
    }
}

export class Adapter extends Target {
    constructor(private adaptee: Adaptee) {
        super();
    }

    request(): string {
        const result = this.adaptee.specialRequest().split('').reverse().join('');

        return `adapter: ${result}`;
    }
}
