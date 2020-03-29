export class HouseTemplate {
    public buildFoundation(): string {
        return 'Build foundation';
    }

    public buildWindows(): string {
        return 'Build windows';
    }

    public buildPillars(): string {
        throw new Error('You have to build your own pillars');
    }

    public buildWalls(): string {
        throw new Error('You have to build your own walls');
    }

    public buildHouse(): string {
        this.buildFoundation();
        this.buildPillars();
        this.buildWalls();
        this.buildWindows();

        return 'Build house';
    }
}

