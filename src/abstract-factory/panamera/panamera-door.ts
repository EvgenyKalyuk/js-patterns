type PanameraDoorType = {
    side: string;
}

export default class PanameraDoor {
    constructor(private side: string) {
    }

    build(): PanameraDoorType {
        if (this.side === 'left') {
            return {
                side: this.side
            }
        }

        if (this.side === 'right') {
            return {
                side: this.side
            }
        }

        throw new Error('please set left or right side');
    }
}
