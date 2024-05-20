/* 

Crear dos clases, Empleado y Gerente, que representan a los empleados en una empresa.

Clase Empleado
Propiedades: 
1. name (string): el nombre del empleado.
2. id (string): el ID del empleado.
3. salary (number): el salario del empleado.

Métodos: 
- calculateSalary(): devuelve el salario del empleado.

Clase Gerente
Propiedades:
- numberOfEmployeesManaged (number): el número de empleados que el gerente gerencia.

Métodos: 
- calculateBonus(): devuelve el bono del gerente, que se calcula como numeroDeEmpleadosGerenciados * 100
*/

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
  }
  
  // Crear una instancia de la clase "Empleado"
  const empleado = new Empleado("Juan Pérez", "E001", 50000);
  console.log(`Salario de ${empleado.name}: ${empleado.calculateSalary()}`);  // Debería mostrar 50000
  
  // Crear una instancia de la clase "Gerente"
  const gerente = new Gerente("Ana Gómez", "G001", 70000, 10);
  console.log(`Salario de ${gerente.name}: ${gerente.calculateSalary()}`);  // Debería mostrar 70000
  console.log(`Bono de ${gerente.name}: ${gerente.calculateBonus()}`);  // Debería mostrar 1000
  