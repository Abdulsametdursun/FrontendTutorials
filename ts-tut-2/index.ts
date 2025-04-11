let myName: string = "emir";
let myAge: number = 33;
let university: boolean = true;

type UserRole = "admin" | "user" | 1 | 2 | true;

interface Point {
  x: number;
  y: number;
}

// alias of type
type Characters = string;

let myFriendName: Characters = "test";
console.log(">> TYPEOF MYFRIENDNAME", typeof myFriendName);

let izmir: Point;
izmir = {
  x: 1,
  y: 2,
};

type User = {
  id: number;
  name: string;
  age: number;
};

let currentUser: User;

currentUser = {
  id: 1,
  name: "test",
  age: 11,
};

let myRole: UserRole = "admin";

let user: {
  id: number;
  firstName: string;
  lastName: string;
  role: UserRole;
};

user = {
  id: 1,
  firstName: "sam",
  lastName: "dursun",
  role: "admin",
};

console.log(">> USER", user);

let userNames: string[] = ["john", "ken", "natasha", "melissa"];

userNames.push("ahmet");

console.log(">> ARR", userNames);

// tuple
type ColorTuple = [number, number, number];

let redColor: ColorTuple = [255, 0, 0];
redColor.push(44);

console.log(">> RED COLOR", redColor);
console.log(">> TYPEOF COLOR", typeof redColor);

type ColorObjectType = {
  r: number;
  g: number;
  b: number;
  a: number;
};

let blueColor: ColorObjectType;
blueColor.r = 0;
blueColor.g = 0;
blueColor.b = 255;

enum WeekDay {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

let currentDay: WeekDay = WeekDay.Sun;

let isWeekend: boolean;

function detectWeekend(day: WeekDay): boolean {
  let isWeekend: boolean;

  switch (day) {
    case WeekDay.Mon:
    case WeekDay.Tue:
    case WeekDay.Wed:
    case WeekDay.Thu:
    case WeekDay.Fri:
      isWeekend = false;
      break;
    case WeekDay.Sat:
    case WeekDay.Sun:
      isWeekend = true;
      break;
  }

  return isWeekend;
}

isWeekend = detectWeekend(currentDay);

console.log(">> CURRENT DAY: " + currentDay + " is weekend: " + isWeekend);
