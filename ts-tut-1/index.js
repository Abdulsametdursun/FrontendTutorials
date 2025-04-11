var readLine = require("prompt-sync")();
console.log("test");
function add(num1, num2) {
  console.log("num1 type: " + typeof num1);
  console.log("num2 type: " + typeof num2);
  return num1 + num2;
}
console.log(String, null, Boolean, undefined, Symbol);
var total = add(1.2, 5);
console.log("Total: " + total);
var str1;
str1 = "hello";
console.log("foo".length);
console.log(str1.length);
var helloType;
helloType = function (name) {
  return "hello ".concat(name);
};
console.log(helloType("emir"));
var person;
person = {
  name: "sam",
  age: 33,
};
var user = {
  id: 1,
  role: "admin",
  firstName: "sam",
  lastName: "dursun",
  age: 33,
};
console.log(user);
var myRole = 1;
console.log("myRole variable status: ", myRole, typeof myRole);
var input = readLine("What is your role: ");
myRole = input;
console.log(myRole);
console.log(typeof myRole);
var WeekDays;
(function (WeekDays) {
  WeekDays[(WeekDays["Mon"] = 0)] = "Mon";
  WeekDays[(WeekDays["Tue"] = 1)] = "Tue";
  WeekDays[(WeekDays["Wed"] = 2)] = "Wed";
  WeekDays[(WeekDays["Thu"] = 3)] = "Thu";
  WeekDays[(WeekDays["Fri"] = 4)] = "Fri";
  WeekDays[(WeekDays["Sat"] = 5)] = "Sat";
  WeekDays[(WeekDays["Sun"] = 6)] = "Sun";
})(WeekDays || (WeekDays = {}));
function isWeekend(day) {
  var isWeekend;
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
