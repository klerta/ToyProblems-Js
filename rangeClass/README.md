# Range Class - Approach

## Problem Statement

Build a class to represent a range of numbers that takes:

- A beginning index (`start`).
- An end index (`end`, optional). If there is no end index, the range should include only the passed-in start value.
- A 'step' (`step`, optional). The step is the interval at which elements are included. A step of 1 includes every element in the range, while a step of 2 includes every other element.

The range should have a constructor that accepts these arguments in that order.

It should also support the following utility functions:

- `size()`: Return the number of items represented by the range.
- `each(callback(index))`: Iterate over the range, passing each value to a callback function.
- `includes(index)`: Return whether or not the range includes the passed value.

You should also be aware of the following caveats:

- Allow a negative value for 'step' to count backward.
- If no step is provided, default it to 1.
- If the start value is greater than the end value, assume we're counting backward.
- Should return null if no 'start' value is given.
- Range should use constant space, even during the each method.

## Approach

1. **Create a class `Range`** with a constructor function that accepts `start`, `end`, and `step` as parameters.

   - Inside the constructor:
     - Initialize instance variables `start`, `end`, and `step` with the provided values.
     - If `end` is not provided, set it to `start`.

2. **Implement the `size` method**:

   - Calculate the size of the range using the formula `(end - start) / step + 1`. Return the result.

3. **Implement the `each` method**:

   - Use a loop to iterate through the range, starting from `start` and incrementing by `step` in each iteration.
   - Call the provided callback function with the current value in each iteration.

4. **Implement the `includes` method**:

   - Check if the provided value is within the range defined by `start`, `end`, and `step`. Return true if it is, otherwise false.

5. The `Range` class efficiently represents and interacts with a range of numbers.

### Complexity

- **Time Complexity**:
  - `size()` method: O(1)
  - `each()` method: O(N), where N is the number of elements in the range.
  - `includes()` method: O(1)

- **Space Complexity**:
  - O(1) for storing instance variables.
