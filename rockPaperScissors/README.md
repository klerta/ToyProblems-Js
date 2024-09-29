# Rock Paper Scissors - Approach

## Problem Statement

Write a function that generates every sequence of throws a single player could throw over a three-round game of rock-paper-scissors.

## Approach

1. **Create a function `rockPaperScissors`** that accepts the number of `rounds` as a parameter (default is 3).

2. **Define the possible throws** in an array called `throws`. In this case, we have 'R' for rock, 'P' for paper, and 'S' for scissors.

3. **Initialize an empty array `sequences`** to store the generated sequences.

4. **Create a helper function `generateSequences`** that takes two parameters: `round` (the remaining rounds to play) and `sequence` (the current sequence being generated).

   - Inside `generateSequences`:
     - Check if `round` is equal to 0.
       - If yes, it means we've generated a complete sequence, so push it into the `sequences` array.
       - If not, proceed to the next step.

   - Use a loop to iterate through the possible throws ('R', 'P', 'S') and recursively call `generateSequences` with decreased `round` and an updated `sequence` by adding the current throw.

5. **Call the `generateSequences` function initially** with the number of `rounds` and an empty string as the initial `sequence`.

6. **Return the `sequences` array** containing all the possible sequences for the given number of rounds.

## Complexity

- **Time Complexity:**
  - The function generates all possible sequences of length `rounds`, where the length of each sequence is fixed at `rounds`. Hence, the time complexity is O(3^rounds).

- **Space Complexity:**
  - The space complexity is O(3^rounds) since that's the number of sequences generated.

