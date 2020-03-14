export default class ConstructorPatter {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

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


