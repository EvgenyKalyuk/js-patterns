import ConstructorPattern from '../index';

describe('constructor pattern', () => {
   it('create instance', () => {
       const name = 'John';
       const instance = new ConstructorPattern(name);

       expect(instance.name).toBe(name);
   });

   it('call method', () => {
       const name = 'John';
       const instance = new ConstructorPattern(name);

       expect(instance.sayHello()).toBe(`Hello ${name}`);
   });

   it('check getter and setter', () => {
       const newName = 'Bill';
       const instance = new ConstructorPattern('John');

       instance.name = newName;

       expect(instance.name).toBe(newName);
    });
});
