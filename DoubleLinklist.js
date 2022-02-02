class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }
  ////////////////////////////////////////
  ///////////////////////////////////////
  Append(value) {
    let newNode = {
      value: value,
      next: null,
      prev: null,
    };
    this.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  ///////////////////////////////////
  Prepend(value) {
    let firstNode = {
      value: value,
      next: null,
    };
    firstNode.next = this.head;
    this.head = firstNode;
    this.length++;
    return this;
  }
  ////////////////////////////
  /////////////////////////////
  Printlist() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  //////////////////
  //////////////////
  Insert(index, value) {
    //check for age case to see if the index is greater than then the lenght of the array;
    if (index >= this.length) {
      return this.Append(value);
    }
    // if thats not the case then we need to make a new node to insert

    const newNode = {
      value: value,
      next: null,
    };

    // now we need to traverse to find the location where we will insert our new node
    const Leader = this.TraverseNode(index - 1);
    // its index -1 because we need to append the new value to the next of the previous value to keep the chain * - *
    const valueAtIndex = Leader.next;
    // we give valueAtIndex what ever was stored at the next: of leader meaning the second star * - *
    Leader.next = newNode;
    // now we make leader.next point at the new node we created
    newNode.next = valueAtIndex;
    // NOW newNode is pointing at what Leader was pointing at initial. we have official inserted this node 😎😎

    this.length++;
    // update the length of the link list
    this.Printlist();
    // we finish by printing the list.
  }

  TraverseNode(index) {
    let counter = 0;
    // currentNode we start at the head and change to the next value until we counter == the index that was entered
    let currentNode = this.head;
    // runn this until we find the index
    while (counter !== index) {
      // update current node to be the next whatever the value of the next node is
      currentNode = currentNode.next;
      // update counter so we can keep moving
      counter++;
    }
    return currentNode;
  }
  ////////////////////
  // In order to remove we will need to lose reference to that paticuraly node
  Remove(index) {
    // *-target-*
    // Find the unwanted node by using the traverse method and passing it the index
    const target = this.TraverseNode(index);
    // then find the node before the unwantwade node, we will use this to sever the connection to the linked list;

    const leader = this.TraverseNode(index - 1);
    // the variable Hold will contain wathever the star node is *-target-*
    const Hold = target.next;
    leader.next = Hold;
    target.next = null;
    this.length--;
    this.Printlist();
  }
}

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  Push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /// we are going to pop off the next last node
  Pop() {
    if (this.head == null) return undefined;
    /// we next create two variables, we call one current and the other tail, we will use current to traverse the node until we find null, while the tail lags right behind it
    let current = this.head;
    let finalTail = current;
    while (current.next !== null) {
      finalTail = current;
      // we update final tail so that it willl always lag behind until we reach the target
      current = current.next;
    }
    this.tail = this.tail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let mylist = new SinglyLinkedList();
mylist.Push(89);
mylist.Push(78);
mylist.Push(788);
mylist.Push(8);
mylist.Push(878);

console.log(mylist);
