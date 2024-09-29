# Async Map

## Problem Statement

Implement the function `asyncMap` that performs asynchronous mapping of an array of tasks to collect results and return them in order.

`asyncMap` has two parameters:
- `tasks`: An array of asynchronous functions (tasks).
- `callback`: A final-result callback function that will receive the results of the tasks.

Each task function receives a task-specific callback that must be invoked when the task completes. The final-result callback passed to `asyncMap` receives the results collected by the task-specific callbacks.

The order of these results should be the same as the order of the tasks. It is important to note that this order should match the order of tasks passed to `asyncMap`.

Once all the callbacks of the tasks are returned, `asyncMap` should invoke the final-result callback with the results array.

## Function Signature

```javascript
/**
 * Perform asynchronous mapping of an array of tasks to collect results and return them in order.
 *
 * @function asyncMap
 * @param {Array<Function>} tasks - An array of asynchronous functions (tasks).
 * @param {Function} callback - A final-result callback function to receive the results.
 * @return {void} - Does not return anything.
 */
const asyncMap = function(tasks, callback) {
  // Your code here.
};
