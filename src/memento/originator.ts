import { Memento } from './memento';

export class Originator {
    private _state: string = '';

    set state(state: string) {
        this._state = state;
    }

    get state(): string {
        return this._state;
    }

    public saveToMemento(): Memento {
        return new Memento(this._state);
    }

    public getStateFromMemento(memento: Memento): void {
        this._state = memento.state;
    }
}
