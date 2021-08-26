const Stack = require("../algos/stack");

describe("A stack", function () {
  let stack,
    uniqueObj = { id: 456 };
  beforeEach(() => {
    stack = new Stack();
  });

  test("adds and removes an item", () => {
    stack.add(uniqueObj);
    expect(stack.remove()).toBe(uniqueObj);
  });

  test("returns `undefined` on underflow (empty)", function () {
    expect(stack.remove()).toBe(undefined);
    stack.add(uniqueObj);
    expect(stack.remove()).toBe(uniqueObj);
    expect(stack.remove()).toBe(undefined);
  });

  // LIFO: Last In, First Out
  test("adds and removes three items in a LIFO way", function () {
    stack.add(5).add(uniqueObj).add("fullstack");
    expect(stack.remove()).toBe("fullstack");
    expect(stack.remove()).toBe(uniqueObj);
    expect(stack.remove()).toBe(5);
    expect(stack.remove()).toBe(undefined);
  });

  test("can handle interspersed add and remove", function () {
    stack.add(1);
    expect(stack.remove()).toBe(1);
    stack.add(2).add(3);
    expect(stack.remove()).toBe(3);
    stack.add(4);
    expect(stack.remove()).toBe(4);
    expect(stack.remove()).toBe(2);
    expect(stack.remove()).toBe(undefined);
  });

  test("adds and removes its own items", function () {
    const s2 = new Stack();
    stack.add("fullstack");
    s2.add("JavaScript");
    expect(stack.remove()).toBe("fullstack");
    expect(stack.remove()).toBe(undefined);
    expect(s2.remove()).toBe("JavaScript");
    expect(s2.remove()).toBe(undefined);
  });
});
