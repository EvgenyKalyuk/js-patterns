import Bank from './bank';
import Balance from './balance';
import CreditHistory from './creadit-history';

export default class CreditFacade {
    bank: Bank;
    balance: Balance;
    creditHistory: CreditHistory;

    constructor(private name: string) {
        this.bank = new Bank();
        this.balance = new Balance();
        this.creditHistory = new CreditHistory();
    }

    applyFor(amount: number): boolean {
        const isApproved = this.bank.verify(amount);
        const isPositiveBalance = this.balance.check(this.name);
        const isGoodCreditHistory = this.creditHistory.check(this.name);

        return isApproved && isPositiveBalance && isGoodCreditHistory;
    }
}
