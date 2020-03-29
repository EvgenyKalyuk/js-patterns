import { Visitor } from './visitor.interface';

export class Employee {
    constructor(
        private readonly _name: string,
        private _salary: number,
        private _vacation: number
    ) {}

    public accept(visitor: Visitor) {
        visitor.visit(this);
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary: number) {
        this._salary = salary;
    }

    get vacation() {
        return this._vacation;
    }

    set vacation(vacation: number) {
        this._vacation = vacation;
    }
}
