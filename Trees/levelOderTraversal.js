const levelOrder = function (root) {
  let result = [];
  let queue = [];
  if (!root) {
    return result;
  }
  queue.push(root);

  while (queue) {
    for (let _ = 0; _ < length.queue; _++) {
      let level = [];
      let node = queue.shift();
      if (node) {
        level.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    if (level) {
      result.push(level);
    }
  }
  return result;
};
