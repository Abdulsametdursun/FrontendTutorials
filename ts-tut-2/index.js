var myName = "emir";
var myAge = 33;
var university = true;
var myFriendName = "test";
console.log(">> TYPEOF MYFRIENDNAME", typeof myFriendName);
var izmir;
izmir = {
  x: 1,
  y: 2,
};
var currentUser;
currentUser = {
  id: 1,
  name: "test",
  age: 11,
};
var myRole = "admin";
var user;
user = {
  id: 1,
  firstName: "sam",
  lastName: "dursun",
  role: "admin",
};
console.log(">> USER", user);
var userNames = ["john", "ken", "natasha", "melissa"];
userNames.push("ahmet");
console.log(">> ARR", userNames);
var redColor = [255, 0, 0];
redColor.push(44);
console.log(">> RED COLOR", redColor);
console.log(">> TYPEOF COLOR", typeof redColor);
var blueColor;
blueColor.r = 0;
blueColor.g = 0;
blueColor.b = 255;
var WeekDay;
(function (WeekDay) {
  WeekDay[(WeekDay["Mon"] = 0)] = "Mon";
  WeekDay[(WeekDay["Tue"] = 1)] = "Tue";
  WeekDay[(WeekDay["Wed"] = 2)] = "Wed";
  WeekDay[(WeekDay["Thu"] = 3)] = "Thu";
  WeekDay[(WeekDay["Fri"] = 4)] = "Fri";
  WeekDay[(WeekDay["Sat"] = 5)] = "Sat";
  WeekDay[(WeekDay["Sun"] = 6)] = "Sun";
})(WeekDay || (WeekDay = {}));
var currentDay = WeekDay.Sun;
var isWeekend;
function detectWeekend(day) {
  var isWeekend;
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
