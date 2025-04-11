function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 6));

function calculate<T extends number | string>(a: T, b: T): number {
  return parseInt(a.toString()) + parseInt(b.toString());
}

console.log(calculate("1", "2"));

type MyDynamicType<T, P, A, B, C> = {
  type: T;
  payload: P;
  foo: A;
  bar: B;
  baz: C;
};

const example1: MyDynamicType<string, object, number, boolean, string> = {
  type: "test",
  payload: {
    test: "Test",
  },
  foo: 1,
  bar: true,
  baz: "baz",
};

console.log("example1: ", example1);

type StatusType = "active" | "passive" | "cancelled" | "pending";

const example2: MyDynamicType<StatusType, string, number, boolean, string> = {
  type: "passive",
  payload: "aergaergaergafgdrthsetag",
  foo: 1,
  bar: true,
  baz: "test",
};
console.log("example2: ", example2);
