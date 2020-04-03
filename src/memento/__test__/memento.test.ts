import { CareTaker } from '../care-taker';
import { Originator } from '../originator';

describe('memento pattern', () => {
    it('save state and get state', () => {
        const originator = new Originator();
        const careTracker = new CareTaker();

        originator.state = 'state #1';
        careTracker.add(originator.saveToMemento());
        originator.state = 'state #2';
        careTracker.add(originator.saveToMemento());
        originator.state = 'state #3';

        expect(originator.state).toBe('state #3');

        originator.getStateFromMemento(careTracker.get(0));

        expect(originator.state).toBe('state #1');

        originator.getStateFromMemento(careTracker.get(1));

        expect(originator.state).toBe('state #2');
    });
});
