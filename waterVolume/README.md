
# Water Volume Between Buildings - Solution

## Introduction

This solution determines the maximum amount of water that can be collected between a series of adjoining buildings represented by an array of numbers. Each number in the array represents the height of a building.

## Solution Strategy

The solution leverages a two-pointer approach where we initialize two pointers at both ends of the array and iterate inward, tracking the maximum height seen so far from both sides and accumulating the water volume at each index based on the difference between the current height and the maximum height seen so far.

### Function Explanation

- **Initialization:**
  - **left:** Pointer initialized to the start of the array.
  - **right:** Pointer initialized to the end of the array.
  - **leftMax:** Variable to track the maximum height seen so far from the left.
  - **rightMax:** Variable to track the maximum height seen so far from the right.
  - **waterVolume:** Variable to accumulate the total water volume.

- **Iteration:**
  - We iterate inward using a while loop until the left pointer is less than the right pointer.
  - Inside each iteration, we update the maximum height seen so far from both sides and accumulate the water volume based on the height difference.

### Complexity Analysis

- **Time Complexity:** O(n), where n is the number of elements in the input array. This is achieved through a single pass of the array using two pointers.
- **Space Complexity:** O(1), as we only use a constant amount of additional space for variables to track pointers and maximum heights.

## Usage

Refer to the [problem.md](problem.md) file for a detailed problem statement and examples.
