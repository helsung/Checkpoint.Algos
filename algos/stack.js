class Stack {
  // Stack constructor function
  constructor() {
    this.items = [];
    this.head = this.items[0];
    this.tail = this.items.slice(-1);
    this.size = 0;
  }

  // Stack.prototype.add
  add(item) {
    if (!this.head) {
      this.head = item;
    }
    this.items[this.size] = item;
    this.tail = item;
    this.size++;
    return this; // for chaining, do not edit
  }

  // Stack.prototype.remove
  remove() {
    const removedTail = this.tail;

    if (this.size === 0) {
      return undefined;
    } else {
      this.size--;
      this.tail = this.items[this.size - 1];
      this.items = this.items.slice(0, this.size);
    }
    return removedTail;
  }
}
module.exports = Stack;
