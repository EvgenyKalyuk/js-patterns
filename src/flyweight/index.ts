export class Car {
    public model: string;
    public price: number;

    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
    }
}

export class CarFactory {
    private cars: Array<Car> = [];

    private getCar(model: string): Car | void {
        return this.cars.find(car => car.model === model);
    }

    public create(model: string, price: number) {
        const savedCar = this.getCar(model);

        if (savedCar) {
            return savedCar;
        }

        const newCar = new Car(model, price);
        this.cars.push(newCar);

        return newCar;
    }
}
