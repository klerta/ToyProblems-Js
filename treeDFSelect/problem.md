# Depth-First Select on a Tree

## Problem

Your task is to implement the `DFSelect` method on the `Tree` class. The method should take a filter function as its parameter. This filter function will be called with each node's value and its depth during a depth-first traversal of the tree.

The `DFSelect` method should return a flat array of node values for which the filter function returns `true`.

### Constraints

* The filter function takes two arguments: the node's value and the node's depth in the tree.
* You should implement this method on the existing `Tree` class. Do not create a new class.

### Example

```javascript
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
root1.DFSelect(function (value, depth) {
  return value % 2;
})
// [1, 5, 3, 7]

root1.DFSelect(function (value, depth) {
  return depth === 1;
})
// [2, 3]
