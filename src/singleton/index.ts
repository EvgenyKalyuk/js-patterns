export class Singleton {
    private static instance: Singleton;

    constructor() {
        if (Singleton.instance) {
            throw new Error('already initialized');
        }

        Singleton.instance = this;
    }

    public static getInstance(): Singleton {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        return Singleton.instance = new Singleton;
    }
}
