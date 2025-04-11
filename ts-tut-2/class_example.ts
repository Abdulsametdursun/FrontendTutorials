let my_name: string = "test";

class Person {
  firstName: string;
  lastName: string;
  birth_year: number;
  protected is_admin: boolean;

  set_is_admin(is_admin: boolean): void {
    this.is_admin = is_admin;
  }

  print_data(): void {
    console.log(">> The print_data method in the Person class was called.");
    console.log(
      `Fullname: ${this.firstName} ${this.lastName} Birth year: ${this.birth_year} Is admin: ${this.is_admin}`
    );
  }
}

let ahmet: Person = new Person();
ahmet.firstName = "ahmet";
ahmet.lastName = "test";
ahmet.birth_year = 1990;
ahmet.set_is_admin(false);
ahmet.print_data();

class Employee extends Person {
  public salary: number;
  public department: string;

  constructor(salary: number, department: string) {
    super();

    this.salary = salary;
    this.department = department;
  }

  public print_data() {
    console.log(">> The print_data method in the Employee class was called..");

    console.log(">>>>>>>>>>>>>>>>>>>>>");
    console.log(`Fullname: ${this.firstName} ${this.lastName}`);
    console.log(`Birth year: ${this.birth_year}`);
    console.log(`Is admin: ${this.is_admin}`);
    console.log(`Salary: ${this.salary}`);
    console.log(`Department: ${this.department}`);
  }
}

let mehmet = new Employee(1000, "Software Development");
mehmet.firstName = "mehmet";
mehmet.lastName = "example";
mehmet.birth_year = 1991;
mehmet.set_is_admin(false);
mehmet.print_data();

enum EmployeeType {
  Fulltime,
  PartTime,
  Freelancer,
  Outsource,
}

abstract class AbstractEmployee extends Employee {
  private employee_type: EmployeeType;

  protected constructor(department: string, employee_type: EmployeeType) {
    super(0, department);

    this.employee_type = employee_type;
  }

  public abstract calculate_salary(hour_per_month: number): number;

  public print_data() {
    super.print_data();
    console.log(`Employee Type: ${EmployeeType[this.employee_type]}`);
  }
}

class FreelancerEmployee extends AbstractEmployee {
  protected readonly hourly_rate = 10;

  constructor(department: string) {
    super(department, EmployeeType.Freelancer);
  }

  public calculate_salary(hour_per_month: number): number {
    console.log(">> FREELANCER EMPLOYEE SALARY CALCULATING");
    this.salary = this.hourly_rate * hour_per_month;

    return this.salary;
  }
}

class FulltimeEmployee extends AbstractEmployee {
  protected readonly hourly_rate = 20;

  constructor(department: string) {
    super(department, EmployeeType.Fulltime);
  }

  public calculate_salary(hour_per_month: number): number {
    console.log(">> FREELANCER EMPLOYEE SALARY CALCULATING");
    this.salary = this.hourly_rate * hour_per_month * 0.9;

    return this.salary;
  }
}

let freelancer1 = new FreelancerEmployee("software development");
freelancer1.firstName = "Freelancer 1";
freelancer1.lastName = "Example";
let freelancer1_salary = freelancer1.calculate_salary(80);
freelancer1.print_data();

console.log(`>> Freelancer 1 salary: ${freelancer1_salary}`);

let fulltime1 = new FulltimeEmployee("manager");
fulltime1.firstName = "Manager 1";
fulltime1.lastName = "Tutorial";
fulltime1.birth_year = 1980;
fulltime1.calculate_salary(160);
fulltime1.print_data();

type KeyboardType = {
  layout: "minimal" | "numeric" | "full";
  keys: "q" | "f";
};

let myKeyboard: KeyboardType = {
  layout: "minimal",
  keys: "q",
};

myKeyboard.layout = "minimal";
myKeyboard.keys = "q";

interface KeyboardInterface {
  layout: "minimal" | "numeric" | "full";
  keys: "q" | "f";
}

class AmericanKeyboard implements KeyboardInterface {
  public keys: "q" | "f";
  public layout: "minimal" | "numeric" | "full";
}

let friendKeyboard: AmericanKeyboard = new AmericanKeyboard();
friendKeyboard.layout = "minimal";
friendKeyboard.keys = "q";
console.log(">> Friend Keyboard: ", friendKeyboard);
