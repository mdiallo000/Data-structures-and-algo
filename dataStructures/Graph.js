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
// ==============================================

const Recursion_DFS = (graph, start) => {
  console.log(start);
  for (let neighbors of graph[start]) {
    Recursion_DFS(graph, neighbors);
  }
};

// ===============================================
const Breath_First_Shirt = (graph, start) => {
  let queue = [start];
  let current;

  while (queue.length > 0) {
    current = queue.shift();
    console.log(current);
    for (let neighbors of graph[current]) {
      queue.push(neighbors);
    }
  }
};

const network = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: ['F'],
  F: [],
  E: [],
};
console.log(Breath_First_Shirt(network, 'A'));
