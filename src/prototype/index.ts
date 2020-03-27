type TeslaModelSThisType = {
    numWheels: number;
    manufacturer: string;
    make: string;
}

const TeslaModelS = function(this: TeslaModelSThisType) {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
};

TeslaModelS.prototype.go = () => {
    return 'go';
};

TeslaModelS.prototype.stop = () => {
    return 'stop';
};

export default TeslaModelS;
