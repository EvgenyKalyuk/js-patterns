export class Memento {
    constructor(private readonly _state: string) {
    }

    get state() {
        return this._state;
    }
}
