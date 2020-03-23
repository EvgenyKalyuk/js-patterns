type CaymanDoorType = {
    side: string;
}

export default class CaymanDoor {
    constructor(private side: string) {
    }

    build(): CaymanDoorType {
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
