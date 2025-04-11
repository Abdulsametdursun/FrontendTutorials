function add(a, b) {
  return a + b;
}
console.log(add(5, 6));
function calculate(a, b) {
  return parseInt(a.toString()) + parseInt(b.toString());
}
console.log(calculate(1, 2));
var example1 = {
  type: "test",
  payload: {
    test: "Test",
  },
  foo: 1,
  bar: true,
  baz: "baz",
};
console.log("example1: ", example1);
var example2 = {
  type: "active",
  payload: "aergaergaergafgdrthsetag",
  foo: 1,
  bar: true,
  baz: "test123456",
};
console.log("example2: ", example2);
