import BoxsterDoor from './boxster-door';
import BoxsterHood from './boxter-hood';

export default class Boxster {
    public model: string = 'Boxster';

    public createDoor(side: string): BoxsterDoor {
        return new BoxsterDoor(side);
    }

    public createHood(): BoxsterHood {
        return new BoxsterHood();
    }
}
