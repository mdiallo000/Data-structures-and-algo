// ** Big O of Stacks
// ** Adding and Removing are both 0(1) since its last IN FIRST out, so we will essentially not traverse of create gaps in between the stack.
// ** Searching and Acessing are both 0(n) meaning the speed will be dtermined by the number of items in our Stack. Its recommended to use a regular array if assess is a priority.

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // ** This method is always verbatim to the way we push a new node on a linkedList
  Enqueue(value) {
    let newnode = new Node(value);
    if (!this.first) {
      this.first = newnode;
      this.last = newnode;
    } else {
      this.last.next = newnode;
      this.last = newnode;
    }
    return this.size++;
  }

  Dequeue() {
    // **  h=> 4=>0=>
    if (!this.first) return null;
    let tempvar = this.first;
    // ** Make an edge case in case there are itema on the list
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return tempvar;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next - null;
  }
}

let myqueue = new Queue();

myqueue.Enqueue('first');
myqueue.Enqueue('Second');
myqueue.Enqueue('Third');
console.log(myqueue);
