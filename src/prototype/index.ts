class TeslaModelS {
    public numWheels = 4;
    public manufacturer = 'Tesla';
    public make = 'Model S';

    go() {}

    stop() {}
}

TeslaModelS.prototype.go = () => {
    return 'go';
};

TeslaModelS.prototype.stop = () => {
    return 'stop';
};
