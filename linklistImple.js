// let mylinklist = {
//   head: {
//     value: 10,
//     next: {
//       value: 34,
//       next: {
//         value: 12,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    



  }


}

let mylist = new LinkedList(10);
mylist.append(15);
mylist.append(85);
console.log(mylist);
