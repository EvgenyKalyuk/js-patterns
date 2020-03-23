export default class ConstructorPatter {
    constructor(private _name: string) {}

    set name(newName: string) {
        this._name = newName;
    }

    get name(): string {
        return this._name;
    };

    public sayHello(): string {
        return `Hello ${this._name}`;
    }
}


