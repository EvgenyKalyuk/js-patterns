import { IStrategy } from './strategy.interface';

export class StrategySort implements IStrategy {
    doAlgorithm(data: Array<string>): Array<string> {
        return data.sort();
    }
}
