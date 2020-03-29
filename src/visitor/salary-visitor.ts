import { Employee } from './index';
import { Visitor } from './visitor.interface';

export class SalaryVisitor implements Visitor {
    visit(employee: Employee) {
        employee.salary = employee.salary * 1.1;
    }
}
