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

  Append(value) {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

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

  Printlist() {
    let arr = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  Insert(idx, value) {

      if (idx >= this.length){
        return this.Append(value);

      }

      const NewNode ={
        value: value,
        next: null
      }
    const leader = this.Traverse(index-1)
      
      Traverse(index){
        // we will use this function to travers the link list and find a paticular index
          let counter = 0;
        let currentNode = this.head;

        while( counter !== index){
            currentNode = this.head.next;  
            counter ++;

        }


      }

    }


  }


}

let mylist = new LinkedList(10);
mylist.Append(15);
mylist.Append(85);
mylist.Prepend(100);
console.log(mylist.Printlist());
