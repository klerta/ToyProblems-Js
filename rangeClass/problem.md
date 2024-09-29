

# Range Class

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
- Range should use constant space, even during the `each` method.


