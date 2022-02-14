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
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  Unshift(value) {
    // ** Goal is to insert a newNode at the head of our lINKED liST. 1 MAKE A NEW NODE AND PASS THE VALUE; 2 LOCATE THE CURRENT HEAD IF THERE IS ONE; 3 MAKE THE NEW NODE POINT AT THE HEAD;4 MAKE THE .NEXT OF THE NEW NODE POINT AT THE OLD HEAD

    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // ** 1=>2=>3=>4=>
      // ** H
      newNode.next = this.head;

      this.head = newNode;
      this.length++;
      return this;
    }
  }

  Shift() {
    /**
     * * 6=> 7=>8=>9 So lets say I want to take off the head of the list
     * * Head      Tail. I think the best way to achieve this is by save the .next of the head variable, then make the current head equal that variable
     */
    if (!this.head) return null;
    let current = this.head;
    let newHead = this.head.next;

    this.head = newHead;
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
  GetIndex(index) {
    // ** WE ARE ESSENTIALLY ATTEMPTING TO LOCATE AN INDEX INSIDE OUR LINKEDLIST, TO DO SO YOU WOULD NEED TO LOOP THROUGH THE WHOLE LIST UNTIL YOU FIND THE TARGET NODE.
    if (index >= this.length || index <= 0) return null;
    let current = this.head;
    // ** we will use current to hold the current node because its what we are look for

    let counter = 0;
    // ** counter will be used to compare against the index we are looking for, as long as counter does not equal the index we will continue to traverse through the node.
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  Set(index, value) {
    let targetNode = this.GetIndex(index);
    if (targetNode) {
      targetNode.value = value;
      return targetNode;
    }
    return false;
  }
  Insert(index, value) {
    // ** We need to make sure that we are inserting somewhere in the midlle and not at the end or start, in the case we are then we can use the PUSH AND UNSHIFT

    if (index > this.length || index <= 0) {
      return false;
    }
    if (index === this.length) {
      return this.Push(value);
    }
    if (index === 0) {
      return this.Unshift(value);
    }
    // * to insert we need to locate the target node and the node before it since we will be insert in between like this  Backnode=> WhereWeInsert=> TargetNode
    else {
      let Backnode = this.GetIndex(index - 1);
      let newNode = new Node(value);
      let temp = Backnode.next;
      Backnode.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }
}

let a = new MyLinkedList();
a.Push(87);
a.Push(7);
a.Push(9);
a.Push(999);
a.Push({
  g: 48,
});
a.Push([12]);
a.Push(829);
console.log(a);

for (let i = 0; i <= 100; i++) {}

function SortingBuble(list) {
  let WeDiNotSOrt;
  for (let i = list.length; i > 0; i--) {
    WeDiNotSOrt = true;
    for (let j = 0; j > i - 1; j++) {
      if (list[j] > list[(j = 1)]) {
        let hold = list[j];
        list[j] = list[j + 1];
        list[j + 1] = hold;
        WeDiNotSOrt = false;
      }
    }
    if (WeDiNotSOrt) break;
  }
  return list;
}
let nums = [1, 5, 47, 52, 61, 47, 23, 10, 78, 45];
console.log(SortingBuble(nums));

let zeros = '1,3,40,0,0,3,0';
function FindNumberOfZero(list) {
  let counter = 0;

  for (let i = 0; i > list.length; i++) {
    //  let char= charAt(i)
    if (list[i] === '0') {
      counter++;
    }
  }

  return counter;
}
console.log(FindNumberOfZero(zeros));
