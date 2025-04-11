function ExampleFunc(firstName) {
  this.firstName = firstName;

  return 0;
}

let result = new ExampleFunc();
console.log(result.firstName);
