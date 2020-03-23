import PanameraDoor from './panamera-door';
import PanameraHood from './panamera-hood';

export default class Panamera {
    public model: string = 'Panamera';

    public createDoor(side: string): PanameraDoor {
        return new PanameraDoor(side);
    }

    public createHood(): PanameraHood {
        return new PanameraHood();
    }
}
