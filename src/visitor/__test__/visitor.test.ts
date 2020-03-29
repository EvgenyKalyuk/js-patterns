import { Employee } from '../index';
import { SalaryVisitor } from '../salary-visitor';
import { VacationVisitor } from '../vacation-visitor';

describe('visitor patter: employee', () => {
    const employee = new Employee('John', 1000, 5);

    it('use salary visitor', () => {
        const salaryVisitor = new SalaryVisitor();

        employee.accept(salaryVisitor);

        expect(employee.salary).toBe(1000 * 1.1);
    });

    it('use vacation visitor', () => {
        const vacationVisitor = new VacationVisitor();

        employee.accept(vacationVisitor);

        expect(employee.vacation).toBe(5 + 2);
    })
});
