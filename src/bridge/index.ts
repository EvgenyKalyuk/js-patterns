class Color {
    constructor(private readonly color: string) {
    }

    get colorName(): string {
        return this.color;
    }
}

export class Circle {
    constructor(private color: Color) {
    }

    public toString(): string {
        return `${this.color.colorName} circle`;
    }
}

export class Triangle {
    constructor(private color: Color) {
    }

    public toString(): string {
        return `${this.color.colorName} triangle`;
    }
}

export const redColor = new Color('red');
export const greenColor = new Color('green');
