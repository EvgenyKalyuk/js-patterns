interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class Product {
    public parts: string[] = [];
}

export class ConcreteBuilder implements Builder {
    private product: Product = new Product();

    public producePartA(): void {
        this.product.parts.push('part-a');
    }

    public producePartB(): void {
        this.product.parts.push('part-b');
    }

    public producePartC(): void {
        this.product.parts.push('part-c');
    }

    public getProduct(): Product {
        const product = { ...this.product };

        this.product = new Product();

        return product;
    }
}

export class Director {
    constructor(private builder: Builder) {
    }

    public buildMinimalProduct(): void {
        this.builder.producePartA()
    }

    public buildMaxProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
