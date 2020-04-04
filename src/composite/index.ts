import { Component } from './component';

class Composite extends Component {
    private children: Array<Component> = [];

    constructor(name: string) {
        super(name);
    }

    public add(component: Component): void {
        this.children.push(component);
    }

    public remove(component: Component): void {
        this.children = this.children.filter(child => child !== component);
    }

    execute(depth: number) {
        this.children.forEach(child => {
            child.execute(depth);
        });
    }
}
