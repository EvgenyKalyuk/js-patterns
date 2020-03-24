export default class Bank {
    verify(amount: number): boolean {
        return amount < 100;
    }
}
