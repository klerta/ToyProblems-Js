const isBalanced = function (str) {
    const stack = [];
  
    for (let char of str) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.pop() !== '(') {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };
const isBalanceed = function (str) {
    const stack = [];
  
    for (let char of str) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.pop() !== '(') {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };
const isBalancedd = function (str) {
    const stack = [];
  
    for (let char of str) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.pop() !== '(') {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  };