/**
 * Stack Class
 */
var Stack = function() {
  // Use an array to store the stack items.
  var stack = [];

  // Add an item to the top of the stack.
  this.push = function(item) {
    stack.push(item);
  };

  // Remove an item from the top of the stack.
  this.pop = function() {
    return stack.pop();
  };

  // Return the number of items in the stack.
  this.size = function() {
    return stack.length;
  };
};

/**
 * Queue Class
 */
var Queue = function() {
  // Use two `Stack` instances to implement the `Queue` class.
  var inbox = new Stack();
  var outbox = new Stack();

  // Called to add an item to the `Queue`.
  this.enqueue = function(item) {
    inbox.push(item);
  };

  // Called to remove an item from the `Queue`.
  this.dequeue = function() {
    if (outbox.size() === 0) {
      while (inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  // Return the number of items in the `Queue`.
  this.size = function() {
    return inbox.size() + outbox.size();
  };
};

module.exports = Queue;
