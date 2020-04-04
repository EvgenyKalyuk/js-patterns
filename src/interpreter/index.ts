interface Expression {
    interpreter(context: string): boolean;
}

export class TerminalExpression implements Expression {
    constructor(private readonly  data: string) {
    }

    interpreter(context: string): boolean {
        return context.includes(this.data);
    }
}

export class OrExpression implements Expression {
    constructor(
        private readonly expr1: Expression,
        private readonly expr2: Expression
    ) {}

    interpreter(context: string): boolean {
        return this.expr1.interpreter(context) || this.expr2.interpreter(context);
    }
}

export class AndExpression implements Expression {
    constructor(
        private readonly expr1: Expression,
        private readonly expr2: Expression
    ) {}

    interpreter(context: string): boolean {
        return this.expr1.interpreter(context) && this.expr2.interpreter(context);
    }
}
