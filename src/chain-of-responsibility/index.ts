export class Request {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    getBill(bill: number) {
        this.amount -= bill;

        return this;
    }
}
