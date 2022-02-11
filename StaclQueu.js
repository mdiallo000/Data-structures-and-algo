class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  Push(value) {
    let newnode = new Node(value);
    if (this.size == 0) {
      this.first = newnode;
      this.last - newnode;
    } else {
      let save = this.first;
      this.first = newnode;
      newnode.next = save;
    }
    return ++this.size;
  }

  Pop() {
    if (this.head === 0) return null;
    let saveFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.size--;
    }
    return saveFirst;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next - null;
  }
}

let mystack = new Stack();
mystack.Push(45);
mystack.Push(895);
mystack.Push(5);
mystack.Push('i AM NEW');
console.log(mystack);
