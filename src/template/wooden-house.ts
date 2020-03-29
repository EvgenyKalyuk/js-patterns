import { HouseTemplate } from './index';

export class WoodenHouse extends HouseTemplate {
    buildWalls(): string {
        return 'Build walls for wooden house';
    }

    buildPillars(): string {
        return 'Build pillars for wooden house';
    }
}
