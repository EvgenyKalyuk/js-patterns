import Hero from './hero';
import Villain from './villain';

type UnitOptions = {
    type: 'hero' | 'villain';
    name: string;
    health: number;
}

type HeroOptions = UnitOptions & {
    type: 'hero'
}

type VillainOptions = UnitOptions & {
    type: 'villain'
}

export default class UnitFactory {
    createUnit(unitOptions: HeroOptions): Hero;
    createUnit(unitOptions: VillainOptions): Villain;

    public createUnit(unitOptions: UnitOptions): Hero | Villain {
        if (unitOptions.type === 'hero') {
            return new Hero(unitOptions.name, unitOptions.health);
        } else if (unitOptions.type === 'villain') {
            return new Villain(unitOptions.name, unitOptions.health);
        } else {
            throw new Error('Select either a Hero or a Villain');
        }
    }
}
