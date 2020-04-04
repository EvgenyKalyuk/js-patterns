import { Component } from './component';

export class Leaf extends Component {
    constructor(name: string) {
        super(name);
    }

    execute(depth: number): void {
        super.execute(depth);
    }
}
