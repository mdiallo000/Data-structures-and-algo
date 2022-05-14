const Depth_First_Shirt = (graph, Start) => {
  let stack = [Start];
  let current;
  //  * W will run the algorithim as long as the stack is not empty
  while (stack.length > 0) {
    current = stack.pop();
    console.log(current);
    for (let vertex of graph[current]) {
      stack.push(vertex);
    }
  }
};
const Breath_First_Shirt = (graph, start) => {};

const network = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: ['F'],
  F: [],
  E: [],
};
console.log(Depth_First_Shirt(network, 'A'));
