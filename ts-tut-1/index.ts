const readLine: any = require("prompt-sync")();

console.log("test");

function add(num1: number, num2: number) {
  console.log("num1 type: " + typeof num1);
  console.log("num2 type: " + typeof num2);

  return num1 + num2;
}

console.log(String, null, Boolean, undefined, Symbol);

let total = add(1.2, 5);
console.log("Total: " + total);

let str1: string;
str1 = "hello";

console.log("foo".length);
console.log(str1.length);

let helloType: (name: string) => string;
helloType = function (name: string): string {
  return `hello ${name}`;
};

console.log(helloType("sam"));

let person: {
  name: string;
  age: number;
};

person = {
  name: "sam",
  age: 33,
};

type allowedUserTypes = "admin" | "merchant" | "user";

let user: {
  id: 1 | 2 | 3;
  role: allowedUserTypes;
  firstName: string;
  lastName?: string;
  age: number;
} = {
  id: 1,
  role: "admin",
  firstName: "sam",
  lastName: "dursun",
  age: 33,
};

console.log(user);

type UserRole = "admin" | "merchant" | "user" | 1 | 2 | 3;

let myRole: UserRole = 1;
console.log("myRole variable status: ", myRole, typeof myRole);

let input = readLine("What is your role: ");

myRole = input;
console.log(myRole);

console.log(typeof myRole);

enum WeekDays {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

function isWeekend(day: WeekDays) {
  let isWeekend: boolean;

  switch (day) {
    case WeekDays.Mon:
    case WeekDays.Tue:
    case WeekDays.Wed:
    case WeekDays.Thu:
    case WeekDays.Fri:
      isWeekend = false;
      break;
    case WeekDays.Sat:
    case WeekDays.Sun:
      isWeekend = true;
      break;
  }

  return isWeekend;
}
