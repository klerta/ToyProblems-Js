
# Depth-First Select on a Tree - Solution

## Introduction

In this solution, we have implemented the `DFSelect` method on the `Tree` class. It uses a filter function that is applied to each node during a depth-first traversal to selectively add node values to a result array.

## Solution Strategy

The solution utilizes recursion to conduct a depth-first traversal, passing the current depth at each recursive call to aid in depth-specific filtering. 

### Function Explanation

#### Base Case:
- **Action:** We initiate a results array to hold node values that pass the filter function.
- **Action:** We apply the filter function to the current node's value and depth. If it returns true, the value is added to the results array.

#### Recursive Case:
- **Action:** We iterate over the children of the current node, recursively calling `DFSelect` on each with an incremented depth value.
- **Action:** We concatenate the results of the recursive calls to our results array.

### Complexity Analysis

#### Time Complexity
- **Analysis:** O(n), where n is the number of nodes in the tree. This is because we traverse each node once.

#### Space Complexity
- **Analysis:** O(h), where h is the height of the tree, represented by the maximum depth of the call stack.

## Usage

Refer to the [problem.md](problem.md) file for example usage and how to work with the `DFSelect` method.
