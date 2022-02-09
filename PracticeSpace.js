/**
 * * lets say i have this sentence "camelCase" return the number
 * * so i ask my self how do i detect whenever we come across a letter
 * * so apperantly you can detect wheter or not a char is uppercase by doing this === this.toUpperCase
 * ? So possible ideas: 1 set a counter =1; 2: loop through the whole string; 3: if a character is upppercase icrement the counter .
 * * First Method didnt work but i was 90% on the right track
 * *gghdfgdf
 * !The best case
 *
 *
 *
 *
 */

let str = 'camelCaseTheStringToseeifitWorks';

function CamelCase(str) {
  // if (str.length <=0) return null
  let counter = 1;

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char == char.toUpperCase) {
      counter++;
    }
  }
  return counter;
}
console.log(CamelCase(str));

/**
 * * lets try the same one but this time with longer letters and using the split function, whic help eliminate empty ''
 *
 *
 */

let obj = {
  g: {
    value: 1,
    next: 'left',
  },
  letter: 'a string',
  arr: [1, 2, 3, 4, 5],
};

console.log(obj['arr']);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // * Head and Tail pointers *-*

  Push(value) {
    let newnode = new Node(value);

    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
    return this;
  }
  Pop() {
    if (this.length == 0) return undefined;
    let tailfinder = this.head;
    let current = this.head;
    // ** So we create two new variables that will start at the head, this will be our two pointers that will lead us to the target
    while (current.next) {
      tailfinder = current;
      //** the point is to keep tailfinder always behind where we currently are, becuase eventually current will reach the end node, while tailfinder will be righ behind TF=>C, then we can pop of current  8=> 10=> 12=> Null. The loop will end when the next value is nulll.
      // **         TF   C

      current = current.next;
    }
    this.tail = tailfinder;
    tailfinder.next = null;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }

  GetLastNode() {
    let current = this.head;

    while (current) {
      current = current.next;
    }
    return current;
  }
}

let a = new MyLinkedList();
a.Push(87);
a.Push(7);
a.Push(9);
a.Pop('IamBefore');
a.Pop('IamAfter');
console.log(a.GetLastNode());
console.log(a);
