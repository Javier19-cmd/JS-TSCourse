class Empleado {
    name: string;
    id: string;
    salary: number;
  
    constructor(name: string, id: string, salary: number) {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
  
    calculateSalary(): number {
      return this.salary;
    }
  }
  
  class Gerente extends Empleado {
    numberOfEmployeesManaged: number;
  
    constructor(name: string, id: string, salary: number, numberOfEmployeesManaged: number) {
      super(name, id, salary);
      this.numberOfEmployeesManaged = numberOfEmployeesManaged;
    }
  
    calculateBonus(): number {
      return this.numberOfEmployeesManaged * 100;
    }

    override calculateSalary(): number {
        return this.salary + this.calculateBonus();
    }
  }
  
const manager = new Gerente("Jane Smith", "M001", 75000, 10)
console.log(manager.calculateSalary())
