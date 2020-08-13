var removeDuplicates = function (s, k) {
  let stack = [];
  for (let c of s) {
    let prev = stack.pop();
    if (!prev || prev[0] !== c) {
      stack.push(prev);
      stack.push(c);
    } else if (prev.length < k - 1) {
      stack.push(prev + c);
    }
  }

  return stack.join('');
};
