# Stack and Queue

## Problem Statements

### Stack Class

Write a `Stack` class using your preferred instantiation pattern. Avoid using native array methods like `push`, `pop`, and `length`.

#### Functionality

1. **`push(item)`**
   - Add an item to the top of the stack.

2. **`pop()`**
   - Remove an item from the top of the stack.

3. **`size()`**
   - Return the number of items in the stack.

### Queue Class

Implement a `Queue` class using two instances of the `Stack` class: `inbox` and `outbox`.

#### Functionality

1. **`enqueue(item)`**
   - Called to add an item to the `Queue`.

2. **`dequeue()`**
   - Called to remove an item from the `Queue`.

3. **`size()`**
   - Should return the number of items in the `Queue`.

### Examples

#### Stack Class

```javascript
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
// Expected Output: 3
// Popped the top item (3).

stack.size();
// Expected Output: 2
// There are 2 items left in the stack.
