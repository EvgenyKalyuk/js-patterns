import Boxster from './boxster';
import Cayman from './cayman';
import Panamera from './panamera';

export default class CarFactory {
    createCar(model: 'boxster'): Boxster;
    createCar(model: 'cayman'): Cayman;
    createCar(model: 'panamera'): Panamera;

    public createCar(model: string): Boxster | Cayman | Panamera {
        switch (model) {
            case 'boxster':
                return new Boxster();

            case 'cayman':
                return new Cayman();

            case 'panamera':
                return new Panamera();

            default:
                throw new Error('please set model: boxster, cayman or panamera');
        }
    }
}
