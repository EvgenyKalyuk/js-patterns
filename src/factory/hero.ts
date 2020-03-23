export default class HeroFactory {
    private health: number;
    private maxHealth: number = 100;

    constructor(private name: string, health: number) {
        if (health < this.maxHealth) {
            this.health = health;
        } else {
            this.health = this.maxHealth;
        }
    }

    public attacked(attackValue: number): number {
        if (this.health < attackValue) {
            this.health = 0;
        } else {
            this.health -= attackValue;
        }

        return this.health
    }

    public heal(healValue: number): number {
        if (this.health + healValue > this.maxHealth) {
            this.health = this.maxHealth;
        } else {
            this.health += healValue;
        }

        return this.health;
    }
}
