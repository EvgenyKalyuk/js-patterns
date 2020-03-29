import { Employee } from './index';
import { Visitor } from './visitor.interface';

export class VacationVisitor implements Visitor {
    visit(employee: Employee) {
        employee.vacation = employee.vacation + 2;
    }
}
