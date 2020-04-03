import { IStrategy } from './strategy.interface';

export class StrategyReverse implements IStrategy {
    doAlgorithm(data: Array<string>): Array<string> {
        return data.reverse();
    }
}
