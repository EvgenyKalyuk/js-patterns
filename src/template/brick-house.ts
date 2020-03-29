import { HouseTemplate } from './index';

export class BrickHouse extends HouseTemplate {
    buildWalls(): string {
        return 'Build walls for brick house';
    }

    buildPillars(): string {
        return 'Build pillars for brick house';
    }
}
