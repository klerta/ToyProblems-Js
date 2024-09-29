# Stack and Queue - Approach

## Stack Class

1. **Create a `Stack` class using a constructor function.**
   - Use an array to store the stack items.

2. **Add an item to the top of the stack using the `push` method.**
   - Implement the `push` method to push an item onto the stack array.

3. **Remove an item from the top of the stack using the `pop` method.**
   - Implement the `pop` method to remove and return the item at the top of the stack array.

4. **Return the number of items in the stack using the `size` method.**
   - Implement the `size` method to return the length of the stack array.

## Queue Class

1. **Create a `Queue` class using a constructor function.**
   - Use two instances of the `Stack` class, `inbox`, and `outbox`, to implement the `Queue`.

2. **Implement the `enqueue` method to add an item to the `Queue`.**
   - Implement the `enqueue` method to push an item onto the `inbox` stack.

3. **Implement the `dequeue` method to remove an item from the `Queue`.**
   - Check if the `outbox` stack is empty.
   - If it's empty, transfer items from `inbox` to `outbox` until `inbox` is empty.
   - Then, pop and return an item from the `outbox` stack.

4. **Implement the `size` method to return the number of items in the `Queue`.**
   - Calculate the size of the `Queue` by adding the sizes of both `inbox` and `outbox`.

5. **The `Queue` class efficiently implements a queue using two stacks.**

### Complexity

- Stack Class:
  - Time Complexity: O(1) for push, pop, and size operations.
  - Space Complexity: O(N) for storing items in the stack.

- Queue Class:
  - Time Complexity: O(1) for enqueue, dequeue, and size operations (amortized).
  - Space Complexity: O(N) for storing items in the inbox and outbox stacks.
