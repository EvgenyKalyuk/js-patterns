type BoxsterDoorType = {
    side: string;
}

export default class BoxsterDoor {
    constructor(private side: string) {
    }

    public build(): BoxsterDoorType {
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
