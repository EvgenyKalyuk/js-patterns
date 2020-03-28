import { Switch, SwitchOffCommand, SwitchOnCommand, Light } from '../index';

describe('command pattern', () => {
    it('register and execute commands', () => {
        const lamp = new Light();
        const switchOnCommand = new SwitchOnCommand(lamp);
        const switchOffCommand = new SwitchOffCommand(lamp);
        const commandSwitch = new Switch();

        commandSwitch.register('on', switchOnCommand);
        commandSwitch.register('off', switchOffCommand);

        expect(commandSwitch.execute('on')).toBe('light is on');
        expect(commandSwitch.execute('off')).toBe('light is off');
    });

    it('execute not register command', () => {
       const commandSwitch = new Switch();

       try {
           commandSwitch.execute('on');
       } catch (error) {
           expect(error).toBe('Command not found')
       }
    });
});
