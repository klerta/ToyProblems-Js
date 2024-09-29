# Water Volume Between Buildings

## Introduction

In this problem, you are provided with an array of integers where each integer denotes the height of an adjoining building. During a heavy rainfall, water collects in the spaces between these buildings. Your task is to determine the maximum volume of water that can be collected between the buildings based on their heights.

## Problem Statement

Determine the maximum volume of water that can be collected between the buildings represented by the array of heights.

### Parameters

- `hgts (array of numbers)`: An array where each number represents the height of a building.

### Returns

- `number`: The maximum volume of water that can be collected between the buildings.

### Constraints

- The solution must have a time complexity of O(n) and require fewer than two passes through the array.
- 0 ≤ hgts[i] ≤ 10⁶, where 0 ≤ i < hgts.length.

### Examples

#### Example 1
- Input: `[3, 0, 3]`
- Output: `3`

#### Example 2
- Input: `[4, 0, 3, 1]`
- Output: `4`

### Note

Ensure to maintain the constraints pertaining to the time complexity to come up with an optimized solution.
