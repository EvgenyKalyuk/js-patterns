import CarFactory from '../index';

describe('abstract factory: car factory', () => {
    const carFactory = new CarFactory();

    it('check boxster car', () => {
        const boxsterCar = carFactory.createCar('boxster');
        const boxsterLeftDoor = boxsterCar.createDoor('left').build();
        const boxsterRightDoor = boxsterCar.createDoor('right').build();
        const boxsterHood = boxsterCar.createHood().build();

        expect(boxsterCar.model).toBe('Boxster');
        expect(boxsterLeftDoor.side).toBe('left');
        expect(boxsterRightDoor.side).toBe('right');
        expect(boxsterHood.size).toBe(100);
    });

    it('check cayman car', () => {
        const caymanCar = carFactory.createCar('cayman');
        const caymanLeftDoor = caymanCar.createDoor('left').build();
        const caymanRightDoor = caymanCar.createDoor('right').build();
        const caymanHood = caymanCar.createHood().build();

        expect(caymanCar.model).toBe('Cayman');
        expect(caymanLeftDoor.side).toBe('left');
        expect(caymanRightDoor.side).toBe('right');
        expect(caymanHood.size).toBe(100);
    });

    it('check panamera car', () => {
        const panameraCar = carFactory.createCar('panamera');
        const panameraLeftDoor = panameraCar.createDoor('left').build();
        const panameraRightDoor = panameraCar.createDoor('right').build();
        const panameraHood = panameraCar.createHood().build();

        expect(panameraCar.model).toBe('Panamera');
        expect(panameraLeftDoor.side).toBe('left');
        expect(panameraRightDoor.side).toBe('right');
        expect(panameraHood.size).toBe(100);
    });
});
