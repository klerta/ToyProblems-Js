# Count Leaves in a Tree

## Introduction

In this solution, we aim to accurately count the number of leaf nodes in a given tree data structure. A leaf node is defined as a node that does not have any children. Our strategy is to traverse the tree recursively and sum the total number of leaf nodes encountered.

## Solution Strategy

Our strategy revolves around utilizing a recursive function to navigate through all nodes in the tree. We will identify leaf nodes during this traversal and accumulate the total count. The process involves two essential cases - the base case and the recursive case.

### Function Explanation

#### **Base Case**
- **Condition:** `this.children.length === 0`
- **Explanation:** The node is a leaf node, as it does not have any children.
- **Action:** Return 1, representing the identification of a leaf node.

#### **Recursive Case**
- **Condition:** The node has one or more children.
- **Explanation:** The node is not a leaf node and we should check its children to identify potential leaf nodes.
- **Action:** Utilize the `reduce` method to iterate over the children, recursively calling `countLeaves` on each child node, and summing up the returned values to get the total count of leaf nodes for the current node.

### Complexity Analysis

#### **Time Complexity**
- **Analysis:** O(n), where n represents the number of nodes in the tree.
- **Reasoning:** Our solution involves a recursive traversal where each node in the tree is visited exactly once, thereby giving us a time complexity proportional to the number of nodes.

#### **Space Complexity**
- **Analysis:** O(h), where h stands for the height of the tree.
- **Reasoning:** The recursive traversal utilizes the call stack, where the maximum depth of the stack would be equivalent to the height of the tree, dictating our space complexity.

## Conclusion

Through recursive traversal, our solution successfully and efficiently counts all the leaf nodes in a tree data structure. This approach ensures that every node is visited only once, guaranteeing optimal performance with a linear time complexity and a space complexity dependent on the tree's height. By following this approach, we can succinctly and accurately count all leaf nodes, yielding a solution that is both efficient and easy to understand.

## Usage

Refer to the "Example Usage" section in the problem statement to see how to use the Tree class and the `countLeaves` function to count the leaves in a tree data structure.

