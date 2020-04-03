export class Iterator {
    private index: number;

    constructor(private readonly data: Array<string>) {
        this.index = 0;
    }

    public [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                }

                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
