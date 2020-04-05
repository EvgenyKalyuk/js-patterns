import { redColor, greenColor, Circle, Triangle } from '../index';

describe('bridge pattern', () => {
    it('red color circle', () => {
       const redCircle = new Circle(redColor);

       expect(redCircle.toString()).toBe('red circle');
    });

    it('green color circle', () => {
        const greenCircle = new Circle(greenColor);

        expect(greenCircle.toString()).toBe('green circle');
    });

    it('red color triangle', () => {
        const redTriangle = new Triangle(redColor);

        expect(redTriangle.toString()).toBe('red triangle');
    });

    it('green color triangle', () => {
        const greenTriangle = new Triangle(greenColor);

        expect(greenTriangle.toString()).toBe('green triangle');
    });
});
