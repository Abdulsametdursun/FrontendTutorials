class Person {
  public firstName: string;
  public lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullname(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class People {
  protected _firstName: string;
  protected _lastName: string;
  protected _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  public get age(): number {
    return this._age;
  }

  public set age(newAge: number) {
    if (newAge <= 0 || newAge > 200) {
      throw new Error("Age must be between 1 and 200");
    }

    this._age = newAge;
  }

  public get fullname(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  public printEverything(): void {
    console.log(`${this._firstName} ${this._lastName} ${this._age}`);
  }
}

class Employee extends People {
  protected _salary: number;

  constructor(firstName: string, lastName: string, salary: number) {
    super(firstName, lastName, 0);
    this._salary = salary;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can not be negative.");
    }

    this._salary = newSalary;
  }

  public printEverything() {
    console.log(`${this._firstName} ${this._lastName} ${this._salary}`);
  }
}

let people = new People("sam", "john", 33);
console.log(people.age);
people.age = 22;
console.log(people.age);
people.printEverything();

let employee1 = new Employee("ken", "natasha", 10000);
console.log(`${employee1.fullname} Salary: ${employee1.salary}`);
employee1.printEverything();
