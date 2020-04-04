export class Coffee {
    public cost: number = 1;
}

export const withMilkDecorator = (coffee: Coffee) => {
    coffee.cost += .5;

    return coffee;
};

export const withSyrupDecorator = (coffee: Coffee) => {
    coffee.cost += .2;

    return coffee;
};
