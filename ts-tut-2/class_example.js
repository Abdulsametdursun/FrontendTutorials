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
var my_name = "test";
var Person = /** @class */ (function () {
  function Person() {}
  Person.prototype.set_is_admin = function (is_admin) {
    this.is_admin = is_admin;
  };
  Person.prototype.print_data = function () {
    console.log(">> The print_data method in the Person class was called.");
    console.log(
      "Fullname: "
        .concat(this.firstName, " ")
        .concat(this.lastName, " Birth year: ")
        .concat(this.birth_year, " Is admin: ")
        .concat(this.is_admin)
    );
  };
  return Person;
})();
var ahmet = new Person();
ahmet.firstName = "ahmet";
ahmet.lastName = "test";
ahmet.birth_year = 1990;
ahmet.set_is_admin(false);
ahmet.print_data();
var Employee = /** @class */ (function (_super) {
  __extends(Employee, _super);
  function Employee(salary, department) {
    var _this = _super.call(this) || this;
    _this.salary = salary;
    _this.department = department;
    return _this;
  }
  Employee.prototype.print_data = function () {
    console.log(">> The print_data method in the Employee class was called.");
    console.log(">>>>>>>>>>>>>>>>>>>>>");
    console.log("Fullname: ".concat(this.firstName, " ").concat(this.lastName));
    console.log("Birth year: ".concat(this.birth_year));
    console.log("Is admin: ".concat(this.is_admin));
    console.log("Salary: ".concat(this.salary));
    console.log("Department: ".concat(this.department));
  };
  return Employee;
})(Person);
var mehmet = new Employee(1000, "Software Development");
mehmet.firstName = "mehmet";
mehmet.lastName = "example";
mehmet.birth_year = 1991;
mehmet.set_is_admin(false);
mehmet.print_data();
var EmployeeType;
(function (EmployeeType) {
  EmployeeType[(EmployeeType["Fulltime"] = 0)] = "Fulltime";
  EmployeeType[(EmployeeType["PartTime"] = 1)] = "PartTime";
  EmployeeType[(EmployeeType["Freelancer"] = 2)] = "Freelancer";
  EmployeeType[(EmployeeType["Outsource"] = 3)] = "Outsource";
})(EmployeeType || (EmployeeType = {}));
var AbstractEmployee = /** @class */ (function (_super) {
  __extends(AbstractEmployee, _super);
  function AbstractEmployee(department, employee_type) {
    var _this = _super.call(this, 0, department) || this;
    _this.employee_type = employee_type;
    return _this;
  }
  AbstractEmployee.prototype.print_data = function () {
    _super.prototype.print_data.call(this);
    console.log("Employee Type: ".concat(EmployeeType[this.employee_type]));
  };
  return AbstractEmployee;
})(Employee);
var FreelancerEmployee = /** @class */ (function (_super) {
  __extends(FreelancerEmployee, _super);
  function FreelancerEmployee(department) {
    var _this = _super.call(this, department, EmployeeType.Freelancer) || this;
    _this.hourly_rate = 10;
    return _this;
  }
  FreelancerEmployee.prototype.calculate_salary = function (hour_per_month) {
    console.log(">> FREELANCER EMPLOYEE SALARY CALCULATING");
    this.salary = this.hourly_rate * hour_per_month;
    return this.salary;
  };
  return FreelancerEmployee;
})(AbstractEmployee);
var FulltimeEmployee = /** @class */ (function (_super) {
  __extends(FulltimeEmployee, _super);
  function FulltimeEmployee(department) {
    var _this = _super.call(this, department, EmployeeType.Fulltime) || this;
    _this.hourly_rate = 20;
    return _this;
  }
  FulltimeEmployee.prototype.calculate_salary = function (hour_per_month) {
    console.log(">> FREELANCER EMPLOYEE SALARY CALCULATING");
    this.salary = this.hourly_rate * hour_per_month * 0.9;
    return this.salary;
  };
  return FulltimeEmployee;
})(AbstractEmployee);
var freelancer1 = new FreelancerEmployee("software development");
freelancer1.firstName = "Freelancer 1";
freelancer1.lastName = "Example";
var freelancer1_salary = freelancer1.calculate_salary(80);
freelancer1.print_data();
console.log(">> Freelancer 1 salary: ".concat(freelancer1_salary));
var fulltime1 = new FulltimeEmployee("manager");
fulltime1.firstName = "Manager 1";
fulltime1.lastName = "Tutorial";
fulltime1.birth_year = 1980;
fulltime1.calculate_salary(160);
fulltime1.print_data();
var myKeyboard = {
  layout: "minimal",
  keys: "q",
};
myKeyboard.layout = "minimal";
myKeyboard.keys = "q";
var AmericanKeyboard = /** @class */ (function () {
  function AmericanKeyboard() {}
  return AmericanKeyboard;
})();
var friendKeyboard = new AmericanKeyboard();
friendKeyboard.layout = "minimal";
friendKeyboard.keys = "q";
console.log(">> Friend Keyboard: ", friendKeyboard);
