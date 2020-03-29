import { Employee } from './index';

export interface Visitor {
    visit: (employee: Employee) => void;
}
