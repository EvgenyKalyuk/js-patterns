export class Component {
    public name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    public execute(depth: number): void {};
}
