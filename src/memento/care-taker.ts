import { Memento } from './memento';

export class CareTaker {
    private mementoList: Array<Memento> = [];

    public add(state: Memento) {
        this.mementoList.push(state);
    }

    public get(index: number): Memento {
        return this.mementoList[index];
    }
}
