import CaymanDoor from './cayman-door';
import CaymanHood from './cayman-hood';

export default class Cayman {
    public model: string = 'Cayman';

    public createDoor(side: string): CaymanDoor {
        return new CaymanDoor(side);
    }

    public createHood(): CaymanHood {
        return new CaymanHood();
    }
}
