import { TrafficLights, trafficSignals } from '../index';

describe('state pattern', () => {
    it('check change and sign', () => {
        const trafficLights = new TrafficLights();

        expect(trafficLights.sign()).toBe(trafficSignals.red);

        trafficLights.change();

        expect(trafficLights.sign()).toBe(trafficSignals.yellow);

        trafficLights.change();

        expect(trafficLights.sign()).toBe(trafficSignals.green);

        trafficLights.change();

        expect(trafficLights.sign()).toBe(trafficSignals.red);
    });
});
