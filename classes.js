class Employee {

    #name;
    #surname;
    #salary;

    static raiseAmount = 1.04;

    constructor(name, surname, salary) {
        this.#name = name;
        this.#surname = surname;
        this.#salary = salary;
    }

    get name () {
        return this.#name;
    }

    get surname () {
        return this.#surname;
    }

    get salary () {
        return this.#salary;
    }

    // setter
    set salary (newSalary) {
        this.#salary = newSalary;
    }

    // getter
    get email() {
        return `${this.#name.toLowerCase()}.${this.#surname.toLowerCase()}@company.com`;
    }

    get fullName() {
        return `${this.#name} ${this.#surname}`;
    }

    set fullName (newName) {
        const [name, surname] = newName.split(' ');
        this.#name = name;
        this.#surname = surname;
    }

    raiseSalary() {
        this.salary *= this.raiseAmount || Employee.raiseAmount;
    }

    static changeRaiseAmount (newRaiseAmount) {
        Employee.raiseAmount = newRaiseAmount;
    }

}

class Developer extends Employee {

    constructor(name, surname, salary, progLang) {
        super(name, surname, salary);
        this.progLang = progLang;
    }

    writeCode() {
        console.log(`${this.fullName} writes ${this.progLang} code.`);
    }
}

class Manager extends Employee {

    constructor(name, surname, salary, employees) {
        super(name, surname, salary);
        // this.employees = employees ? employees : [];
        this.employees = employees || [];
    }

    addEmployee(emp) {
        if (!this.employees.includes(emp)) {
            this.employees.push(emp);
            console.log(`${emp.fullName} added.`);
            return;
        }
        console.log(`${emp.fullName} is already in the list.`);
    }

    removeEmployee(emp) {
        if (this.employees.includes(emp)) {
            let index = this.employees.indexOf(emp);
            this.employees.splice(index, 1);
            console.log(`${emp.fullName} is deleted.`);
            return;
        }
        console.log(`${emp.fullName} is not in the list.`);
    }

}

const emp1 = new Employee('Jack', 'Smith', 2000);
const emp2 = new Employee('Mary', 'Gold', 2000);
const dev1 = new Developer('Bob', 'Jones', 3000, 'JavaScript');
const man1 = new Manager('Sarah', 'Rose', 4500, [emp1, emp2]);
// dev1.raiseSalary();
// console.log(dev1.salary);
// dev1.writeCode();
// console.log(man1.employees);
// man1.addEmployee(dev1);
// console.log(man1.employees[2].fullName);

man1.removeEmployee(emp1);