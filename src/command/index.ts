interface Command {
    execute(): string;
}

export class Switch {
    private commandMap: Map<string, Command>;

    constructor() {
        this.commandMap = new Map<string, Command>();
    }

    public register(commandName: string, command: Command):void {
        this.commandMap.set(commandName, command);
    }

    public execute(commandName: string): string {
        const command: Command | void = this.commandMap.get(commandName);

        if (!command) {
            throw 'Command not found';
        }

        return command.execute();
    }
}

export class Light {
    public turnOn(): string {
        return 'light is on';
    }

    public turnOff(): string {
        return 'light is off';
    }
}

export class SwitchOnCommand implements Command {
    constructor(private light: Light) {
    }

    public execute(): string {
        return this.light.turnOn();
    }
}

export class SwitchOffCommand implements Command {
    constructor(private light: Light) {
    }

    public execute(): string {
        return this.light.turnOff();
    }
}
