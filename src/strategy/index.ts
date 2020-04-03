import { IStrategy } from './strategy.interface';

export class Context {
    constructor(private _strategy: IStrategy) {}

    set strategy(strategy: IStrategy) {
        this._strategy = strategy;
    }

    public doSomeLogic(args: Array<string>): Array<string> {
        return this._strategy.doAlgorithm(args);
    }
}
