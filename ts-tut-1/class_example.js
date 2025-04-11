var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Person = /** @class */ (function () {
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  Person.prototype.getFullname = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
  };
  return Person;
})();
var People = /** @class */ (function () {
  function People(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  Object.defineProperty(People.prototype, "age", {
    get: function () {
      return this._age;
    },
    set: function (newAge) {
      if (newAge <= 0 || newAge > 200) {
        throw new Error("Age must be between 1 and 200");
      }
      this._age = newAge;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(People.prototype, "fullname", {
    get: function () {
      return "".concat(this._firstName, " ").concat(this._lastName);
    },
    enumerable: false,
    configurable: true,
  });
  People.prototype.printEverything = function () {
    console.log(
      ""
        .concat(this._firstName, " ")
        .concat(this._lastName, " ")
        .concat(this._age)
    );
  };
  return People;
})();
var Employee = /** @class */ (function (_super) {
  __extends(Employee, _super);
  function Employee(firstName, lastName, salary) {
    var _this = _super.call(this, firstName, lastName, 0) || this;
    _this._salary = salary;
    return _this;
  }
  Object.defineProperty(Employee.prototype, "salary", {
    get: function () {
      return this._salary;
    },
    set: function (newSalary) {
      if (newSalary < 0) {
        throw new Error("Salary can not be negative.");
      }
      this._salary = newSalary;
    },
    enumerable: false,
    configurable: true,
  });
  Employee.prototype.printEverything = function () {
    console.log(
      ""
        .concat(this._firstName, " ")
        .concat(this._lastName, " ")
        .concat(this._salary)
    );
  };
  return Employee;
})(People);
var people = new People("sam", "john", 33);
console.log(people.age);
people.age = 22;
console.log(people.age);
people.printEverything();
var employee1 = new Employee("ken", "natasha", 10000);
console.log(
  "".concat(employee1.fullname, " Salary: ").concat(employee1.salary)
);
employee1.printEverything();
